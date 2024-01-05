import mongoose from "mongoose";

const medicalReportSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  report_date: {
    type: Date,
    default: Date.now(),
  },
  file_path: [
    {
      type: String,
      required: true,
    },
  ],
});

const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema);
export default MedicalReport;
