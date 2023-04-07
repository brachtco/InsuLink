const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//railway process.env?

module.exports = mongoose.connection;