import mongoose from 'mongoose';

const familyMemberSchema = new mongoose.Schema({
  relationship: {
    type: String,
    required: true
  },
  medical_id: {
    type: String,
    required: true
  },
  medical_details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MedicalDetails'
  }
});

const familyDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  family_members: [familyMemberSchema]
}, { timestamps: true });

const FamilyDetails = mongoose.model('FamilyDetails', familyDetailsSchema);
export default FamilyDetails;
