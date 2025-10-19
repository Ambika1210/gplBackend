const express = require("express");
const { newUserController,loginUserController ,updateUserController, deleteUserController} = require("../controller/user.controller.js");

const router = express.Router();

router.post("/register-user", newUserController);
router.post("/login-user",loginUserController);
router.patch("/update-user/:id",updateUserController);
router.delete("/delete-user/:id",deleteUserController)

module.exports = router;