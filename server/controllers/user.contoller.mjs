import User from "../models/User.model.mjs";
import MedicalDetails from "../models/MedicalDetails.model.mjs";
import { errorHandler } from "../utils/error.mjs";

const updateFamilyMembers = async(userId, relationship, medicalId)=>{
    try {
      // Check if the user already has family members
      const existingUser = await User.findById(userId);
      console.log(existingUser)
      // Define the update object
      const updateObject = {}
      if (!existingUser.family_members) {
        // User doesn't have family_members yet, create a new object
        updateObject.family_members = {};
      }
      else {
        updateObject.family_members = existingUser.family_members; // Use existing object
      }
  
      // Set the specific relationship-medicalId pair
      updateObject.family_members[relationship] = medicalId;
      console.log(relationship, medicalId)
      // Update the user document
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: updateObject },
        { new: true }
      );
  
      return updatedUser.family_members;
    } catch (error) {
      throw (error);
    }
  }
  
export const addFamilyMembers = async (req, res, next) => {
    try {
      const userId  = req.params.id;
      const { relationship, medicalId } = req.body;
      console.log(userId)
      // Check if the medical ID exists in the database
      const userWithMedicalId = await User.findOne({ medical_id: medicalId });
      if (!userWithMedicalId) {
        return next(errorHandler(404, `Medical ID "${medicalId}" does not exist`));
      }
  
      // Update the user document
      const updatedUser = await updateFamilyMembers(userId, relationship, medicalId);
  
      if (!updatedUser) {
        return next(errorHandler(`User with ID "${userId}" not found`));
      }
  
      res.json(updatedUser);
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

    // Create a new medical details document
    const newMedicalDetails = new MedicalDetails({
      user_id: userId,
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

  
