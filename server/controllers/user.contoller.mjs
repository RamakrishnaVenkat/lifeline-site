import User from "../models/User.model.mjs";
import MedicalDetails from "../models/MedicalDetails.model.mjs";
import { errorHandler } from "../utils/error.mjs";


//FUNCTION TO ADD MEDCIAL DETAILS
export const addMedicalDetails = async(req, res, next)=>{
  try {
    const userId = req.user._id;

    if(!userId) next(errorHandler(400, "User id not found, You are unauthorized!"))
    
    const {medicalDetails} = req.body;
    // Validate the provided medical details
    if (!medicalDetails) {
      return next(errorHandler(404, 'Missing medical details'));
    }

    // Fetch the user using the provided userId
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }

    // Extract the medical ID from the user object
    const medicalId = user.medical_id;
   
    // Create a new medical details document
    const newMedicalDetails = new MedicalDetails({
      user_id: userId,
      medical_id: medicalId,
      medical_conditions: medicalDetails.medical_conditions,
      allergies: medicalDetails.allergies,
      past_surgeries: medicalDetails.past_surgeries,
    });

    // Save the document to the database
    await newMedicalDetails.save();

    res.status(200).json(newMedicalDetails);
  } catch (error) {
    next(error);
  }
}

//TO UPDATE MEDICAL DETAILS 
export const updateMedicalDetails = async(req, res, next)=>{
  //GET THE DETAILS TO UPDATE
  const {medicalDetails} = req.body;
    // Validate the provided medical details
    if (!medicalDetails) {
      return next(errorHandler(404, 'Missing medical details to update!'));
    }

  //GET THE USER ID
  const userId = req.user._id;
  if(!userId) next(errorHandler(400, "You are unauthorized, not allowed to update the details!"))

  //FIND THE MEDICAL DETAILS FOR THE USER
  const updatedDetails = await MedicalDetails.findOneAndUpdate(
   { user_id: userId},
   {
    $set:{
      medical_conditions: medicalDetails.medical_conditions,
      allergies: medicalDetails.allergies,
      past_surgeries: medicalDetails.past_surgeries,
    }
   }
  
    ).select("-user_id")

    if(!updatedDetails) next(errorHandler(404, "Cannot find medical details to update!"))

    return res
    .status(200)
    .json(updatedDetails)
}

export const getMedicalDetails = async(req, res, next)=>{
  try {
    const userId = req.user._id
    if(!userId) next(errorHandler(400, "Cannot get medical details, you are unauthorized"))

    const user = await User.findById(userId)
    if(!user) next(errorHandler(404, "User not found to display the medical details"))

    const medicalId = user.medical_id
    
    const userMedicalDetails = await MedicalDetails.findOne({medical_id: medicalId});
    if (!userMedicalDetails) {
      return next(errorHandler(404, 'Medical details not found'));
    }

    return res.status(200).json(userMedicalDetails);
    
  } catch (error) {
    next(error)
  }
}

  
