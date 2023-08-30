const router = require("express").Router();
const  Recipe  = require('../db/models/Recipe');
const  UserRecipe = require('../db/models/UserRecipe')
const User = require('../db/models/User')
module.exports = router;

// get all favorites from a certain user
router.get("/:userId", async (req, res, next) => {
  try {
    const favorites = await UserRecipe.findAll({
      where: { userId: req.params.userId }, 
     /*  include: [{
        model: Recipe,
        through: {
          where: {
            userId: req.params.userId },
          },
      }], */
    });
      res.json(favorites);
  } catch (err) {
    next(err);
  }
});

//adds favorite
//these need editing

 router.post("/:userId/addFavorite", async (req, res, next) => {
      try {
        const { userId } = req.params;
        const { recipeId, title, image } = req.body;
        const favorite = await UserRecipe.create({ 
          userId: userId,
          recipeId: recipeId,
          title: title, 
          image: image,
        })   
      res.send(favorite);
    } catch (error) {
      next(error);
    }
  });

//deletes favorite
router.delete("/:userId/removeFavorite/:recipeId", async (req, res, next) => {
  try {
    const { userId, recipeId } = req.params;
    console.log('params!!', req.params)
    await UserRecipe.destroy({ where: { userId, recipeId } });
    res.json({ message: "Favorite removed successfully", recipeId });
    } catch (error) {
      next(error);
    }
  }); 
