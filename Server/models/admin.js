const express = require("express");
const {Schema , model }=require("mongoose");

const AdminSchema = new Schema ({

    name : {
        type :String ,
        required:true,
        enum:"oussamaHaddad"
    },

    email :{
        type :String ,
        required : true ,
        enum :"oussamahaaddad@admintmn.com"
    },

    password :{
        type :String ,
        required :true ,
        enum :"oussamaisadmin"
    }
    

});

module.exports =model("Admin",AdminSchema);

