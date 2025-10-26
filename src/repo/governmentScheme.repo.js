const governmentScheme = require("../models/governmentScheme.model");

exports.CreateGovernmentSchemeRepo = async (newData) => {
  return await governmentScheme.create(newData);
};
exports.getAllGovernmentSchemeRepo = async () => {
  return await governmentScheme.find();
};

exports.deleteGovernmentSchemeRepo = async (id) => {
  try {
    return await governmentScheme.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateGovernmentSchemeRepo = async (id, data) => {
  try {
    return await governmentScheme.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.findLastDateToApplyRepo = async (date) => {
  try {
    return await governmentScheme.find({ lastDateToApply: { $gte: date } });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getSchemeById = async (id) => {
  try {
    return await governmentScheme.findById(id)
    
  } catch (error) {
        throw new Error(error.message);

    
  }
}

exports.getActiveSchemesRepo = async () => {
  try {
    const activeSchemes = await governmentScheme.find({ isActive: true });
    return activeSchemes;
  } catch (error) {
    throw new Error(error.message);
  }
};











