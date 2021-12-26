const router = require("express").Router();
const {
  ensureAuthenticated,
  ensureAuthorized,
} = require("../midlewares/auth-middleware.js");
const Category = require("../models/category");

//add new cathegory

router.post(
  "/category",
  ensureAuthenticated,
  ensureAuthorized(["admin"]),
  (req, res, next) => {
    const category = new Category({
      title: req.body.title,
      refrencesTo: req.body.refrencesTo,
    });

    category
      .save()
      .then(() => {
        res.status(201).json({
          message: "category saved successfully!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  }
);

//display all the categorys

router.get("/allCategorys", (req, res, next) => {
  Category.find()
    .then((categorys) => {
      res.status(200).json(categorys);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//get one category

router.get("/allCategorys/:id", (res, req, next) => {
  Category.findOne({
    _id: req.params.id,
  })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

//delete category

router.delete("/allCategorys/:id", (req, res, next) => {
  Category.remove({
    _id: req.params.id,
  })
    .then(() => {
      res.send({ message: "category deleted successfully!" });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

module.exports = router;
