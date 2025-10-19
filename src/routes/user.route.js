const express = require("express");
const { newUserController,loginUserController } = require("../controller/user.controller.js");

const router = express.Router();

router.post("/register-user", newUserController);
router.post("/login-user",loginUserController);

module.exports = router;