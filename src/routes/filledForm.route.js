const express = require("express");
const router = express.Router();

const { createFormController,getAllFormController,updateFormController, deleteFormController, calculateFormFeeController} = require("../controller/filledForm.controller");
const {verifyTokenAuth,verifyTokenAdmin} = require("../middleware/auth.middleware.js")

router.post("/create-new-form",verifyTokenAuth,createFormController)
router.get("/get-all-form",verifyTokenAdmin,getAllFormController)
router.patch("/update-form/:id",verifyTokenAuth,updateFormController)
router.delete("/delete-form/:id",verifyTokenAdmin,deleteFormController)
router.get("/total-earning",calculateFormFeeController)


module.exports = router;


