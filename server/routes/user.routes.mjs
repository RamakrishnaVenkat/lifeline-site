//PACKAGES
import express from "express";
import { verifyToken } from "../utils/verifyToken.mjs";
//CONTROLLERS
import { addMedicalDetails, getMedicalDetails, updateMedicalDetails, getUserDetails } from "../controllers/user.contoller.mjs";


const router = express.Router();

router.get("/get-user-details", verifyToken, getUserDetails);
router.post("/add-medical-details", verifyToken, addMedicalDetails);
router.put("/update-medical-details", verifyToken, updateMedicalDetails);
router.get("/get-medical-details", verifyToken, getMedicalDetails);


export default router;
