//PACKAGES
import express from "express";
import { verifyToken } from "../utils/verifyToken.mjs";
//CONTROLLERS
import { addMedicalDetails, getMedicalDetails, updateMedicalDetails } from "../controllers/user.contoller.mjs";


const router = express.Router();

router.post("/add-medical-details", verifyToken, addMedicalDetails);
router.put("/update-medical-details", verifyToken, updateMedicalDetails);
router.get("/get-medical-details", verifyToken, getMedicalDetails);


export default router;
