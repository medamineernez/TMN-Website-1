const express =require("express");
require("dotenv").config ;
const jwt =require("jsonwebtoken");
const router = express.Router();
const Admin = require("../models/admin");
const keys = require("../config/keys");



router.post('/login',(req,res)=>{

    const admin = new Admin ({
        name : req.body.name,
        email:req.body.email,
        password :req.body.password ,
});

if (admin.name === process.env.ADMIN_NAME && admin.email === process.env.ADMIN_EMAIL && admin.password === process.env.ADMIN_PASSWORD  ) {
  
    const payload = {  name: admin.name }; // Create JWT Payload

    // Sign Token
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

}else {
    errors.password = "Password incorrect";
        return res.status(400).json(errors);
}

  
});

module.exports =router ;