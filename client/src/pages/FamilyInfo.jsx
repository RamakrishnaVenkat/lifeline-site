import React, { useState } from 'react';

function FamilyInfo({familyMembers, setFamilyMembers} ) {
  

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { relationship: '', medicalId: '' }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index][name] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  return (
    <div className='family-info-container'>
    
      {familyMembers.map((member, index) => (
        <div key={index}>
          <label className='form-label'>
            Relationship:
            <select className='form-input'
              name="relationship"
              value={member.relationship}
              onChange={(e) => handleInputChange(e, index)}
            >
              <option value="">Select Relationship</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Sibling">Sibling</option>
            </select>
          </label>
          <br />
          <label className='form-label'>
            Medical ID:
            <input className='form-input'
              type="text"
              name="medicalId" placeholder='Enter Medical ID'
              value={member.medicalId}
              onChange={(e) => handleInputChange(e, index)}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="button" onClick={handleAddFamilyMember}>
        Add Family Member
      </button>
    </div>
  );
}

export default FamilyInfo;