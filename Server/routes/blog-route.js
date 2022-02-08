const router = require("express").Router();
const Blog = require("../models/blog");
const path = require("path");
const mltr = require("../midlewares/multer_config");

//add new blog

router.post("/addblog", mltr, (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  const blog = new Blog({
    title: req.body.title,
    category: req.body.category,
    content: req.body.content,

    image: url + "/images/" + req.file.filname,
    image2: url + "/images/"+req.file.filename,

  });

  blog
    .save()
    .then(() => {
      res.status(201).json({
        message: "blog saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//get all blogs

router.get("/allblogs", (req, res, next) => {
  Blog.find()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//get one blog

router.get("/oneblog/:id", (res, req, next) => {
  Blog.findOne({
    _id: req.params.id,
  })
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

//delete one blog

router.delete("/allblogs/:id", (req, res, next) => {
  Blog.remove({
    _id: req.params.id,
  })
    .then(() => {
      res.send({ message: "blog deleted succesfully" });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

//update blog

router.patch("/:id", (req, res) => {
  const blog = Blog.find((blog) => blog.id === req.params.id);

  blog.title = req.body.title;
  blog.category = req.body.category;
  blog.content = req.body.content;
  blog.image = req.file.path;
  blog.image2 = req.body.image2;

  console.log(" your blog has changed succesfully !! ");
});

module.exports = router;
