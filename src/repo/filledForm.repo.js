const filledFormTable = require("../models/filledForm.model");


exports.createNewFormRepo = async (data) => {
  try {
    const form = await filledFormTable.create(data);

    // fetch again and populate both refs
    const populatedForm = await filledFormTable
      .findById(form._id)
      .populate("user", "name mobile")
      .populate("scheme", "schemeName schemeType");

    return populatedForm;
  } catch (error) {
    throw new Error(error.message);
  }
};

