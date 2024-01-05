import MedicalReport from "../models/MedicalReports.model.mjs";
import upload from "../middleware/multer.middleware.mjs"; // Import the multer middleware
import fs from "fs"
import path from "path";
import { errorHandler } from "../utils/error.mjs";


export const addMedicalReport = async (req, res, next) => {
  try {
    // Use the multer middleware for handling file upload
    upload(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      if (!req.file) {
        return next(new Error("Please upload a medical report")); // No file uploaded
      }

      const userId = req.user._id;

      // Find existing FamilyDetails for the user
      let newMedicalReport = await MedicalReport.findOne({ user_id: userId });

      // If no existing medical report, create a new one
      if (!newMedicalReport) {
        newMedicalReport = new MedicalReport({
          user_id: userId,
          file_path: [],
        });
      }

      newMedicalReport.file_path.push(req.file.path);

      await newMedicalReport.save();

      res.status(201).json({ message: "Medical report added successfully" });
    });
  } catch (error) {
    next(error); // Pass any other errors to the error handler
  }
};

export const viewMedicalReport = async (req, res, next) => {
  try {
    const userId = req.user._id; // Assuming you have the user ID available in the request
    const medicalReport = await MedicalReport.findOne({ user_id: userId });

    if (!medicalReport || !medicalReport.file_path.length) {
      return next(errorHandler(404, "You don't have any reports uploaded"))
    }

    // Assuming you're only dealing with one file path, you can fetch the first one for this example
    const filePath = medicalReport.file_path[0];

    // Resolve the absolute path to the file
    const absolutePath = path.resolve(filePath);

    // Check if the file exists
    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ message: "File not found" });
    }

    // Provide the file for viewing or downloading
    res.sendFile(absolutePath);
  } catch (error) {
    next(error); // Pass any other errors to the error handler
  }
};
