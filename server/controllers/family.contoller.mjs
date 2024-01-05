
import User from "../models/User.model.mjs";
import MedicalDetails from "../models/MedicalDetails.model.mjs";
import {}

//ROUTE TO GET FAMILY MEMBERS WITH THEIR MEDICAL DETAILS

export const addFamilyMember = async(req, res, next)=>{
    //1. GET FAMILY MEMBER DETAILS
    const {relationship, medicalId} = req.body
    if(!relationship || !medicalId) 

    
}