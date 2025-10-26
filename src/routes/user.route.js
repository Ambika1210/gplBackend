const express = require("express");
const { newUserController,loginUserController ,updateUserController, deleteUserController, getAllUserController} = require("../controller/user.controller.js");
const {verifyTokenAuth,verifyTokenAdmin} = require("../middleware/auth.middleware.js")
const router = express.Router();

router.post("/register-user", verifyTokenAdmin,newUserController);
router.post("/login-user",loginUserController);
router.patch("/update-user/:id",verifyTokenAdmin,updateUserController);
router.delete("/delete-user/:id",verifyTokenAdmin,deleteUserController)
router.get("/get-all-users",verifyTokenAdmin,getAllUserController);

module.exports = router;