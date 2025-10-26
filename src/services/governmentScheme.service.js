const { trusted } = require("mongoose");
const { findLastDateToApplyController } = require("../controller/governmentScheme.controller");
const { CreateGovernmentSchemeRepo, getAllGovernmentSchemeRepo,deleteGovernmentSchemeRepo,updateGovernmentSchemeRepo,findLastDateToApplyRepo
  
  ,filledFormRepo,
  getActiveSchemesRepo
} = require("../repo/governmentScheme.repo");

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

exports.findLastDateToAppyService = async(date) => {
  try {
    const lastDate = date? new Date(date) : new Date()
    return await findLastDateToApplyRepo(lastDate)
  
   } catch (error) {
    throw new Error(error.message)
    
    
  }

}

exports.getAllActiveSchemeService = async () => {
  try {
    return await getActiveSchemesRepo();
  } catch (error) {
    throw new Error(error.message);
  }
};