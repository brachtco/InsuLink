const { AuthenticationError } = require('apollo-server-express');
const { User, School } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //unsure if this is good
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate('school');

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    school: async () => {
        return await School.find({}).populate('users');
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
        return User.findByIdAndUpdate(context.user.id, args, {
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
