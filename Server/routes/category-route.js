const router = require("express").Router();
//const { ensureAuthenticated, ensureAuthorized } = require("../midlewares/auth-middleware.js");
const Category = require("../models/category");


//add new cathegory

router.post("/category",(req, res, next) => {
   
  const category = new Category({
      title: req.body.title,
      refrencesTo: req.body.refrencesTo  
    });
    
    category.save().then(
      () => {
        res.status(201).json({
          message: 'category saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  } );


router.get("/allCategorys",(req,res,next) => {
  Category.find().then(
    (categorys) => {
  
  
      res.status(200).json(categorys);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});  


module.exports = router;