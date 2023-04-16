const db = require('../config/connection');
const { User, School } = require('../models');
const userData = require('../seeds/userData.json');
const schoolData = require('../seeds/schoolData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await School.deleteMany({});
    await User.create(userData);
    await School.create(schoolData);
  
    console.log('all done!');
    process.exit(0);
  });
