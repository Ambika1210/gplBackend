const {createNewFormRepo,getAllNewFormRepo, updateFormRepo, deleteFormRepo} = require("../repo/filledForm.repo")


exports.createNewFormService= async (data) => {
  try {
   return await createNewFormRepo(data)
    
  } catch (error) {
    throw new Error(error.message);
  }
    
}

exports.getAllNewFormService = async () => {
  try {
   return await getAllNewFormRepo()
  } catch (error) {
    throw new Error(error.message);
  
  }
}

exports.updateFormService = async (id,data) => {
  try {
    return await updateFormRepo(id,data)
    
  } catch (error) {
    throw new Error(error.message)
    
  }
}

exports.deleteFormService = async (id) => {
  try {
   return await deleteFormRepo(id)
    
  } catch (error) {
        throw new Error(error.message)

    
  }
}



