const express = require("express");
const router = express.Router();

const { createFormController } = require("../controller/filledForm.controller");

router.post("/create-new-form",createFormController)
module.exports = router;


