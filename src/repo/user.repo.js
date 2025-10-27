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

exports.updateUserRepo = async(id,value) => {
return await User.findByIdAndUpdate(id,value,{new: true})

}

exports.deleteUserRepo = async(id) => {
  try {
    return await User.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(error.message)
    
  }
}

exports.getUserById = async(id) =>{
  try {
    return await User.findById(id)
  } catch (error) {
    throw new Error(error.message)   
  }
}

exports.getAllUser = async ({date}) => {
  try {
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      return await User.find({
        createdAt: { $gte: startOfDay, $lte: endOfDay },
      });
    } else {
      return await User.find();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
