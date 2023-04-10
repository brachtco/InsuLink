const sequelize = require('../config/connection');
const { User, School } = require('../models');

const userData = require('./userData.json');
//const userToRecipeData = require('./userToRecipeData.json');
const schoolData = require('./schoolData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const schools = await School.bulkCreate(schoolData, {
    individualHooks: true,
    returning: true,
  });

 /* const userToRecipes = await UserToRecipe.bulkCreate(userToRecipeData, {
    individualHooks: true,
    returning: true,
  });*/

  process.exit(0);
};

seedDatabase();
