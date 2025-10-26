const { newUserRepo, loginUserRepo,updateUserRepo, deleteUserRepo, getAllUser } = require("../repo/user.repo.js");
const { generateToken } = require("../middleware/auth.middleware.js");

exports.newUserService = async (userData) => {
  try {
    const user = await newUserRepo(userData);
    const userObj = user.toObject();

    const { password, ...userWithoutPassword } = userObj;
    return userWithoutPassword;
  } catch (error) {
    throw new Error(`Service Error: ${error.message}`);
  }
};

exports.loginUserService = async (mobile, password) => {
  try {
    const loginData = await loginUserRepo({ mobile });
    if (!loginData) {
      throw new Error("invalid user");
    }

    if (password !== loginData.password) {
      throw new Error("invalid password");
    }
    const ambika = generateToken(loginData._id);
    return {
      loginData,
      token: ambika,
    };
  } catch (error) {
    throw new Error(error.msg);
  }
};

exports.updateUserService = async (id,value) => {
  try {
       return await updateUserRepo(id,value);
  
  } catch (error) {
    throw new Error(error.message)
    
  }

}

exports.deleteUserService = async(id) => {
  try {
    return await deleteUserRepo(id)
  } catch (error) {
    throw new Error(error.message)
    
  }
}

exports.getAllUserService=async()=>{
  try {
    return await getAllUser()   
  } catch (error) {
    throw new Error(error.message)
  }
}