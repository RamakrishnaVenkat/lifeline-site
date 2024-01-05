//PACKAGES
import express from "express";
import { verifyToken } from "../utils/verifyToken.mjs";
import { addFamilyMember, getFamilyDetails } from "../controllers/family.contoller.mjs";

const router = express.Router();

router.post("/add-family-member", verifyToken, addFamilyMember)
router.get("/get-family-details", verifyToken, getFamilyDetails)

export default router;
