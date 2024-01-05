//PACKAGES
import express from "express";
import { verifyToken } from "../utils/verifyToken.mjs";
//CONTROLLERS
import { addMedicalReport, viewMedicalReport } from "../controllers/medicalReport.contoller.mjs";


const router = express.Router();

router.post("/add-medical-report", verifyToken, addMedicalReport);
router.get("/get-medical-report", verifyToken, viewMedicalReport);



export default router;
