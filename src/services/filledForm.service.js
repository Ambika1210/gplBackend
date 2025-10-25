const {createNewFormRepo,getAllNewFormRepo, updateFormRepo, deleteFormRepo} = require("../repo/filledForm.repo")
const{getUserById} = require("../repo/user.repo")
const{getSchemeById} = require("../repo/governmentScheme.repo")


exports.createNewFormService = async (data) => {
  try {

    const user = await getUserById(data.user);
    if (!user) {
      throw new Error("User not found");
    }

    const scheme = await getSchemeById(data.scheme);
    if (!scheme) {
      throw new Error("Scheme not found");
    }

    const form = await createNewFormRepo(data);
    return form;

  } catch (error) {
    throw new Error(error.message);
  }
};

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



