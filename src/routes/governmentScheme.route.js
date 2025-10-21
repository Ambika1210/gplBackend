const express = require("express");
const router = express.Router();

const {CreateGovernmentSchemeController, getGovernmentSchemeController, deleteGovernmentSchemeController, updateGovernmentSchemeController, findLastDateToApplyController } = require("../controller/governmentScheme.controller")

router.post("/create-new-scheme",CreateGovernmentSchemeController)
router.get("/all-schemes",getGovernmentSchemeController)
router.delete("/delete-scheme/:id",deleteGovernmentSchemeController)
router.patch("/update-scheme/:id",updateGovernmentSchemeController)
router.get("/findByDate-scheme",findLastDateToApplyController)
module.exports = router;