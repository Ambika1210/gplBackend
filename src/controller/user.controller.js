const { newUserService,loginUserService,u, updateUserService, deleteUserService, getAllUserService } = require("../services/user.service.js");

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
};

exports.updateUserController = async (req,res) => {
  try {
    const{id} = req.params;
    const {...value} = req.body;
    if(!id && !value){
      return res.status(400).json({
        message: "Invalid Data",
        sucess: false
      })
    }
    const updatedData = await updateUserService(id,value)
  return res.status(200).json({
    sucess: true,
    data: updatedData,
    message: "User Updated Sucessfully"
  })

    
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message
    })
    
  }
}

exports.deleteUserController = async (req,res) => {
  try {
    const {id} = req.params
    if(!id){
     return res.status(400).json({
      sucess: false,
      message: "Id should not be empty"
     })
     }
    const user = await deleteUserService(id)
    return res.status(200).json({
      sucess: true,
      message: " User Deleted Sucessfully",
      data: user
    })
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message
    })
  }
}

exports.getAllUserController=async(req,res)=>{
  try {
    const users=await getAllUserService(req.body)
    return res.status(200).json({
      sucess: true,
      message: " User feteched Sucessfully",
      data: users
    })

  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message
    })
  }
}