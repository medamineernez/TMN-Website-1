const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    refrencesTo: {
      type: Number,
      required:true,
    },

  },

  { timestamps: true }
);


module.exports = model("Category", CategorySchema);
