const { CreateGovernmentSchemeRepo, getAllGovernmentSchemeRepo,deleteGovernmentSchemeRepo,updateGovernmentSchemeRepo} = require("../repo/governmentScheme.repo");

exports.CreateGovernmentSchemeService = async (newData) => {

 const newScheme = await CreateGovernmentSchemeRepo(newData)
return newScheme;

}
exports.getAllGovernmentSchemeService = async () => {
    return await getAllGovernmentSchemeRepo()
}

exports.deleteGovernmentSchemeService= async(id) => {
  try {
    return await deleteGovernmentSchemeRepo(id)
  } catch (error) {
    throw new Error(error.message)
    
  }
}

exports.updateGovernmentSchemeService= async(id,dta) => {
  try {
    return await updateGovernmentSchemeRepo(id,dta)
  } catch (error) {
    throw new Error(error.message)
    
  }
}