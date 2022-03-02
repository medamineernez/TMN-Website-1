const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const CoAdmin = require("../models/coAdmin");
const keys = require("../config/keys");

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  CoAdmin.findOne({ email }).then((coadmin) => {
    if (!coadmin) {
      errors.email = "coadmin not found ";
      return res.status(404).json(errors);
    } else if (coadmin && password === coadmin.password) {
      const payload = { name: coadmin.name }; // Create JWT Payload

      // Sign Token
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        });
      });
    } else {
      errors.password = "password incorrect ";
      return res.status(400).json(errors);
    }
  });
});

// get all co admins 

router.get("/allCoadmins", (req, res, next) => {
  CoAdmin.find()
    .then((coadmins) => {
      res.status(200).json(coadmins);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;
