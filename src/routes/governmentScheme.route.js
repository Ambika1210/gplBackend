const express = require("express");
const router = express.Router();

const {CreateGovernmentSchemeController, getGovernmentSchemeController, deleteGovernmentSchemeController, updateGovernmentSchemeController, findLastDateToApplyController, getAllActiveSchemeController } = require("../controller/governmentScheme.controller")
const {verifyTokenAuth,verifyTokenAdmin} = require("../middleware/auth.middleware.js")

router.post("/create-new-scheme",verifyTokenAdmin,CreateGovernmentSchemeController)
router.get("/all-schemes",getGovernmentSchemeController)
router.delete("/delete-scheme/:id",verifyTokenAdmin,deleteGovernmentSchemeController)
router.patch("/update-scheme/:id",verifyTokenAdmin,updateGovernmentSchemeController)
router.get("/findByDate-scheme",findLastDateToApplyController)
router.get("/allActive-Scheme",getAllActiveSchemeController)
module.exports = router;