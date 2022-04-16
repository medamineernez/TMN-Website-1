const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    city:{

      type :String,
      required: false,
    },

     role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "co-admin"],
    },
    password: {
      type: String,
      required: true,
    },

    verificationCode: {
      type: Number,
    },
   
  },
  { timeStamp: true }
);

module.exports = model("User", UserSchema);
