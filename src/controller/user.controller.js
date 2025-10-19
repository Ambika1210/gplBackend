const { newUserService,loginUserService } = require("../services/user.service.js");

exports.newUserController = async (req, res) => {
  try {
    const newUser = await newUserService(req.body);

    return res.status(201).json({
      success: true,
      message: "New user created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error in newUserController:", error.message);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUserController =  async (req,res) => {
  try {
    const {mobile,password} = req.body

    const user =await loginUserService(mobile,password);
    return res.status(201).json({
      sucess: true,
      message: "loggedin sucessfully",
      data: user
    });

    
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,

    })
    
  }
}