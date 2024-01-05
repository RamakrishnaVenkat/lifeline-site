import mongoose from 'mongoose';

const familyDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  family_member:{
    relationship:{
        type: String,
        required: true
    },
    medical_id:{
        type: String,
        required: true
    },
    medical_details:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalDetails"
    }
  }
}, {timestamps: true});

const FamilyDetails = mongoose.model('FamilyDetails', familyDetailsSchema);
export default FamilyDetails;

