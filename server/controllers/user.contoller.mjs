import User from "../models/User.model.mjs";
import MedicalDetails from "../models/MedicalDetails.model.mjs";
import { errorHandler } from "../utils/error.mjs";


export const addFamilyMembers = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { relationship, medicalId } = req.body;
    
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, `User with ID "${userId}" does not exist`));
    }

    // Check if the medical ID exists in the database
    const userWithMedicalId = await User.findOne({ medical_id: medicalId });
    if (!userWithMedicalId) {
      return next(errorHandler(404, `Medical ID "${medicalId}" does not exist`));
    }

    // Add family member to the user's family_members array
    user.family_members.push({
      relationship: relationship,
      medical_id: medicalId,
    });

    // Save the updated user document
    await user.save();

    res.json(user); // Return the updated user object
  } catch (error) {
    next(error);
  }
};



//FUNCTION TO ADD MEDCIAL DETAILS
export const addMedicalDetails = async(req, res, next)=>{
  try {
    const userId = req.params.id;
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

  
