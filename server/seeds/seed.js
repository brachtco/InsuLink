const sequelize = require('../config/connection');
const { User, School } = require('../models');
const userData = require('./userData.json');
const schoolData = require('./schoolData.json');

db.once('open', async () => {
    await userData.deleteMany({});
    await schoolData.deleteMany({});
    await userData.create(userData);
    await Thought.create(schoolData);
  
    console.log('all done!');
    process.exit(0);
  });
