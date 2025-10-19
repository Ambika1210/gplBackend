const User = require("../models/user.model.js");

exports.newUserRepo = async (newData) => {
  try {
    return await User.create(newData);
  } catch (error) {
    if (error.code === 11000) {
      throw new Error(
        `Repository Error: Duplicate key error - ${Object.keys(
          error.keyValue
        ).join(", ")} already exists.`
      );
    }
    throw new Error(
      `Repository Error: Failed to create user - ${error.message}`
    );
  }
};

exports.loginUserRepo = async (filter) => {
  try {
    return await User.findOne(filter);
  } catch (error) {
    throw new Error(error.message);
  }
};
