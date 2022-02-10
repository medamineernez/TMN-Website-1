const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const keys = require("../config/keys");
const passport = require("passport");
const crypto = require("crypto");
require("../midlewares/passport");

const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login");
const router = express.Router();
const User = require("../models/user");

// Email senders
const { welcomeSender } = require("../mailers/senders");

//Register User

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  const code = crypto.randomInt(10000, 10000000);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        verificationCode: code,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save(
              welcomeSender(
                newUser.email,
                newUser.name,
                newUser.verificationCode
              )
            )
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//Login User

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//Logout

router.post("/logout", (req, res, next) => {
  res.clearCookie("access_token");
  res.json({ success: true });
});

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/auth/facebook/callback",
    failureRedirect: "/login/failed",
  })
);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/auth/google/callback",
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
