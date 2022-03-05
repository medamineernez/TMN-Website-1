const router = require("express").Router();
const News = require("../models/news");
const multer = require("multer");



// multer storage 
const storage = multer.diskStorage({
    destination: './images/',
    filename: function(req, file ,cb){
      cb(null ,Date.now() + '-' + file.originalname)
    }
  })
  const upload = multer({ storage })




router.post("/addNews", upload.array('newsImages'),(req, res ,next)=>{

const imageUrl = `http://localhost:3000/images/${req.file.filename}`

    const news = new News ({
        title : req.body.title ,
        newsImages:ImageUrl,
        category :req.body.category,
        content : req.body.content,
        author :req.body.author,
        status : "on hold",
        })


news
.save()
.then(()=>{

    res.status(201).json({

        message : "news saved successfully!"
    });
})
.catch((error)=>{
    res.status(400).json({
        error:error,
        });
    });

});

//get all news 

router.get("/allNews", (req, res, next) => {
    News.find()
      .then((news) => {
        res.status(200).json(news);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  });


  // get one news 

  router.get("/oneNews/:id", (req,res,next) => {
    News.findOne({
      _id: req.params.id,
    })
      .then((oneNews) => {
        res.status(200).json(oneNews);
      })
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  });
  

  // delete news 

  router.delete("/deleteNews/:id", (req,res) => {
    News.remove({
      _id: req.params.id,
    })
      .then(() => {
        res.send({ message: "news deleted successfully!" });
      })
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  });



module.exports =router ;
    

    

