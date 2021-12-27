const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },

    content: {
        type :String,
        required :true 
    },

    image: {
        type: String ,
        required: true 
    },

    image2:{
        type: String,
        required :true 
    },
    
},
  { timestamps: true }
);

BlogSchema.plugin(uniqueValidator);

module.exports = model("Blog", BlogSchema);
