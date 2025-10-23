const {createNewFormService,getAllNewFormService} = require("../services/filledForm.service")

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
        
    

