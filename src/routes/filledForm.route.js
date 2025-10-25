const express = require("express");
const router = express.Router();

const { createFormController,getAllFormController,updateFormController, deleteFormController} = require("../controller/filledForm.controller");

router.post("/create-new-form",createFormController)
router.get("/get-all-form",getAllFormController)
router.patch("/update-form/:id",updateFormController)
router.delete("/delete-form/:id",deleteFormController)


module.exports = router;


