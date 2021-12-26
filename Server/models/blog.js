const { Schema, model } = require("mongoose");


const BlogSchema= new Schema (
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },

        category:{
            type: Schema.Types.ObjectId,
            ref: "Category",
        },

        // a react component to create a content blog with titles and sub-titles 

        content :{
            type :String ,
            required :true ,
        },

        image:{
            type :String,
            required :true 

        },

        image2:{
            type :String
        }
        
        
    },
    
     { timestamps: true }
);



module.exports = model("Blog", BlogSchema);