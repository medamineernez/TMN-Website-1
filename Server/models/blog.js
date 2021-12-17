const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },

  title: {
    type: String,
    required: true
  },

  // react text editor component with subtitles etc ..

  text: {
    type: String,
    required:true,
  },

  imageUrl: {
    type: String,
    required:true,
  },

  imageUrl1:{
    type:String,
},

likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
     
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  },

  author :{
      type:String,
      required:true,
  }

});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
