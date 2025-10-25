const {createNewFormService,getAllNewFormService, updateFormService,deleteFormService} = require("../services/filledForm.service")

exports.createFormController = async (req, res) => {
  try {
    

    const filledFormData = await createNewFormService(req.body);
    return res.status(201).json({
      sucess: true,
      message: "form filled sucesssfully",
      data: filledFormData,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
  }
};

exports.getAllFormController = async(req,res) => {
    try {
    const allForm =await getAllNewFormService()
        return res.status(201).json({
      sucess: true,
      message: "form retrieved sucesssfully",
      data: allForm,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
  }
}
  
exports.updateFormController = async(req,res) => {
  try {
    const formId = req.params;
    const formData = req.body;
   const form =  await updateFormService(formId,formData)
   return res.status(200).json({
      sucess: true,
      message: "form updated sucessfully",
      data: form,
    });
  } catch (error) {
     return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
    
  }
}

exports.deleteFormController = async(req,res) => {
  try {
    const {formId} = req.params;
   const form =  await deleteFormService(formId)
   return res.status(200).json({
      sucess: true,
      message: "form deleted sucessfully",
//data: form,
    });
  } catch (error) {
     return res.status(500).json({
      sucess: false,
      message: error.message || "server Error",
    });
    
  }
}
    

