const {
  CreateGovernmentSchemeService,
  getAllGovernmentSchemeService,
  deleteGovernmentSchemeService,
  updateGovernmentSchemeService,
  findLastDateToAppyService,
  filledFormService
} = require("../services/governmentScheme.service");

exports.CreateGovernmentSchemeController = async (req, res) => {
  try {
    const newData = req.body;
    const dgh = await CreateGovernmentSchemeService(newData);
    return res.status(201).json({
      sucess: true,
      message: "new sheme added sucessfully",
      data: dgh,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
  }
};

exports.getGovernmentSchemeController = async (req, res) => {
  try {
    const schemes = await getAllGovernmentSchemeService();
    return res.status(200).json({
      sucess: true,
      message: "scheme fetched ",
      data: schemes,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
  }
};

exports.deleteGovernmentSchemeController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        sucess: false,
        message: "Id should not be empty",
      });
    }
    const user = await deleteGovernmentSchemeService(id);
    return res.status(200).json({
      sucess: true,
      message: " Scheme Deleted Sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

exports.updateGovernmentSchemeController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({
        sucess: false,
        message: "Id should not be empty",
      });
    }
    const user = await updateGovernmentSchemeService(id, data);
    return res.status(200).json({
      sucess: true,
      message: " Scheme Updated Sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

exports.findLastDateToApplyController = async (req, res) => {
  try {
    const {lastDateToApply }= req.body
    const ambika = new Date(lastDateToApply)

    const schemes = await findLastDateToAppyService(ambika);
    return res.status(200).json({
      sucess: true,
      message: "last date to apply found ",
      data: schemes,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
  }
};



