import mongoose from 'mongoose';

const medicalDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  medical_id: {
    type: String,
    unique: true,
    required: true
  },
  medical_conditions: {
    type: [{
      condition_name: {
        type: String,
        required: true
      },
      diagnosis_date: {
        type: Date,
      },
      treatment: {
        type: String,
      }
    }],
    default: []
  },
  allergies: {
    type: [{
      allergy_name: {
        type: String,
        required: true
      },
      severity: {
        type: String,
        enum: ['Mild', 'Moderate', 'Severe'],
        required: true
      }
    }],
    default: []
  },
  past_surgeries: {
    type: [{
      surgery_name: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      }
    }],
    default: []
  }
});

const MedicalDetails = mongoose.model('MedicalDetails', medicalDetailsSchema);
export default MedicalDetails;

