const express = require("express");
const router = express.Router();

const { createFormController,getAllFormController } = require("../controller/filledForm.controller");

router.post("/create-new-form",createFormController)
router.get("/get-all-form",getAllFormController)
module.exports = router;


