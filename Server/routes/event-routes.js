const router = require("express").Router();
const Event = require("../models/event");
const mltr = require("../midlewares/multer_config");

//add new cathegory

router.post(
  "/addEvent", mltr,
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    const event = new Event({

      title: req.body.title,
      date: req.body.date,
      hour : req.body.hour,
      location :req.body.location,
      eventPoster: url + "/images/" + req.file.filename,
      details:req.body.details
      
    });

    event
      .save()
      .then(() => {
        res.status(201).json({
          message: "event saved successfully!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  }
);
module.exports = router;