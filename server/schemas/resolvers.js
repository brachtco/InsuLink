const { AuthenticationError } = require('apollo-server-express');
const { User, School } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
     return User.findOne({ _id: _id });
    },
    users: async () => {
      return User.find().populate('school');
    },
    school: async (parent, { schoolId }) => {
      return  School.findOne({ _id: schoolId }).populate('users');
    },
    schools: async () => {
      return School.find().populate('users');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('school');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  //
  Mutation: {
    addUser: async (parent, { email, password, firstName, lastName }) => {
      const user = await User.create({ email, password, firstName, lastName });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
