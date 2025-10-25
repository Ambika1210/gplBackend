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

exports.getAllNewFormRepo = async () => {
  try {
    const forms = await filledFormTable.find().populate("user", "name mobile").populate("scheme", "schemeName schemeType");

    return forms;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateFormRepo = async ({id},data) => {
  try {
     const update =  await filledFormTable.findByIdAndUpdate(id,data)
     return update
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.deleteFormRepo = async (id) => {
  try {
   return  await filledFormTable.findByIdAndDelete(id)
    
  } catch (error) {
        throw new Error(error.message)

    
  }
}
