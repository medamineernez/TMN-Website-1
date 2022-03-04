const router = require("express").Router();
const Podcast =require("../models/podcast");


//post a new podcast

router.post("/addPodcast", (req, res) => {
    const podcast = new Podcast({
      title: req.body.title,
      author:req.body.author,
      guests: req.body.guests,
      category: req.body.category,
      podcastLink : req.body.podcastLink,
      videoTeaser:req.body.videoTeaser,
      details:req.body.details,
      status:"on hold",

    });
  
    podcast
      .save()
      .then(() => {
        res.status(201).json({
          message: "podcast saved successfully !",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  });




module.exports =router ;
