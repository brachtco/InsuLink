const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  bio: {
    type: String
  },
  interests: {
    type: String
  },
  hometown: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please provide a valid email address.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
  },
  photo: {
    type: String
  },  
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
