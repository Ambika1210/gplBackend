const {createNewFormRepo} = require("../repo/filledForm.repo")


exports.createNewFormService= async (data) => {
  try {
   return await createNewFormRepo(data)
    
  } catch (error) {
    throw new Error(error.message);
  }
    
}


