//PACKAGES
import express from "express";
import { verifyToken } from "../utils/verifyToken.mjs";
//CONTROLLERS
import { addFamilyMembers, addMedicalDetails } from "../controllers/user.contoller.mjs";


const router = express.Router();

router.post("/add-family/:id", addFamilyMembers);
router.post("/add-medical-details/:id", addMedicalDetails);
// router.get("/signout", signout);

export default router;
