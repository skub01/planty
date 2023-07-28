const Sequelize = require("sequelize");
const db = require("../db");

const UserRecipe = db.define("userRecipe", {
    userId: {
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
      },
});

module.exports = UserRecipe;  