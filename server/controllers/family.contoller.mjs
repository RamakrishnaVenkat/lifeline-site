import User from "../models/User.model.mjs";
import MedicalDetails from "../models/MedicalDetails.model.mjs";
import FamilyDetails from "../models/FamilyDetails.model.mjs";
import { errorHandler } from "../utils/error.mjs";

//ROUTE TO ADD FAMILY MEMBERS WITH THEIR MEDICAL DETAILS
export const addFamilyMember = async (req, res, next) => {
    try {
      // GET FAMILY MEMBER DETAILS
      const { relationship, medicalId } = req.body;
      if (!relationship || !medicalId) {
        return next(errorHandler(400, "Both the details are required to add family!"));
      }
  
      // GET THE USER ID TO CHECK IF THEY ARE AUTHORIZED
      const userId = req.user._id;
      if (!userId) {
        return next(errorHandler(400, "You are unauthorized to add family!"));
      }
  
      // CHECK IF THE MEDICAL ID OF THE FAMILY MEMBER ALREADY EXISTS
      const familyMember = await MedicalDetails.findOne({ medical_id: medicalId });
      if (!familyMember) {
        return next(errorHandler(404, "Family member doesn't exist"));
      }
  
      // CHECK IF THE FAMILY MEMBER ALREADY EXISTS IN FAMILY DETAILS
      const existingFamilyDetails = await FamilyDetails.findOne({
        user_id: userId,
        'family_members.medical_id': medicalId,
      });
  
      if (existingFamilyDetails) {
        return next(errorHandler(400, "Family member already added"));
      }
  
      // GET THE _ID OF MEDICAL DETAILS FOR THE MEMBER
      const medicalDetailsId = familyMember._id;
  
      // Find existing FamilyDetails for the user
      let userFamilyDetails = await FamilyDetails.findOne({ user_id: userId });
  
      // If no existing FamilyDetails, create a new one
      if (!userFamilyDetails) {
        userFamilyDetails = new FamilyDetails({
          user_id: userId,
          family_members: [],
        });
      }
  
      // Add new family member details to the array
      userFamilyDetails.family_members.push({
        relationship,
        medical_id: medicalId,
        medical_details: medicalDetailsId,
      });
  
      // Save the updated FamilyDetails
      await userFamilyDetails.save();
  
      return res.status(200).json(userFamilyDetails);
    } catch (error) {
      return next(errorHandler(500, "Internal Server Error"));
    }
  };

//ROUTE TO GET MEDICAL DETAILS OF THE FAMILY MEMEBRS
export const getFamilyDetails = async(req, res, next)=>{
    try {
        const userId = req.user._id
        if(!userId) next(errorHandler(400, "You are not authorized to view family details!"))

        const familyDetails = await FamilyDetails.findOne({user_id: userId}).select("-user_id").populate('family_members.medical_details')
        if(!familyDetails) next(errorHandler(404, "Family details doesn't exist"))

       return res.status(200).json(familyDetails.family_members) //returns array with objects
    } catch (error) {
        next(error.message)
    }
}
