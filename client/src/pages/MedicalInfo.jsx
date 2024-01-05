import React, { useState } from 'react';

function MedicalInfo() {
    const [medicalConditions, setMedicalConditions] = useState({
        prolongedMedicalConditions: [],
        allergies: [],
        pastSurgeries: [],
      });

  const handleInputChange = (e, category, index) => {
    const { name, value } = e.target;
    const updatedConditions = [...medicalConditions[category]];
    updatedConditions[index][name] = value;

    setMedicalConditions({
      ...medicalConditions,
      [category]: updatedConditions,
    });
  };

  const handleAddEntry = (category) => {
    setMedicalConditions({
      ...medicalConditions,
      [category]: [...medicalConditions[category], {}],
    });
  };

  

  return (
    <div className='medical-info-container'>
      
      <form >
        <div>
          <p>
            If you have/had any medical conditions for a prolonged time and took up treatment, please mention below:
          </p>
          {medicalConditions.prolongedMedicalConditions.map((condition, index) => (
            <div key={index}>
              <label className='form-label'>
                Condition Name:
                <input className='form-input'
                  type="text"
                  name="conditionName" placeholder='Enter Condition Name'
                  value={condition.conditionName || ''}
                  onChange={(e) => handleInputChange(e, 'prolongedMedicalConditions', index)}
                />
              </label>
              <br />
              <label className='form-label'>
                Diagnosis Date:
                <input className='form-input'
                  type="date"
                  name="diagnosisDate"
                  value={condition.diagnosisDate || ''}
                  onChange={(e) => handleInputChange(e, 'prolongedMedicalConditions', index)}
                />
              </label>
              <br />
              <label className='form-label'>
                Treatment:
                <input className='form-input'
                  type="text"
                  name="treatment" placeholder='Enter the treatment taken up'
                  value={condition.treatment || ''}
                  onChange={(e) => handleInputChange(e, 'prolongedMedicalConditions', index)}
                />
              </label>
              <br />
            </div>
          ))}
          <button type="button" onClick={() => handleAddEntry('prolongedMedicalConditions')}>
            Add Condition
          </button>
        </div>

        <div>
          <p>If you have allergies, choose them and choose their severity:</p>
          {medicalConditions.allergies.map((allergy, index) => (
            <div key={index}>
              <label className='form-label'>
                Allergy Name:
                <input className='form-input'
                  type="text"
                  name="allergyName" placeholder='Enter Allergy Name'
                  value={allergy.allergyName || ''}
                  onChange={(e) => handleInputChange(e, 'allergies', index)}
                />
              </label>
              <br />
              <label className='form-label'>
                Severity:
                <select className='form-input'
                  name="severity"
                  value={allergy.severity || ''}
                  onChange={(e) => handleInputChange(e, 'allergies', index)}
                >
                  <option value="">Select Severity</option>
                  <option value="Mild">Mild</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Severe">Severe</option>
                </select>
              </label>
              <br />
            </div>
          ))}
          <button type="button" onClick={() => handleAddEntry('allergies')}>
            Add Allergy
          </button>
        </div>

        <div>
          <p>If you have undergone surgeries in the past, enter the details below:</p>
          {medicalConditions.pastSurgeries.map((surgery, index) => (
            <div key={index}>
              <label className='form-label'>
                Surgery Name:
                <input className='form-input'
                  type="text"
                  name="surgeryName" placeholder='Enter Surgery'
                  value={surgery.surgeryName || ''}
                  onChange={(e) => handleInputChange(e, 'pastSurgeries', index)}
                />
              </label>
              <br />
              <label className='form-label'>
                Surgery Date:
                <input className='form-input'
                  type="date"
                  name="surgeryDate"
                  value={surgery.surgeryDate || ''}
                  onChange={(e) => handleInputChange(e, 'pastSurgeries', index)}
                />
              </label>
              <br />
            </div>
          ))}
          <button type="button" onClick={() => handleAddEntry('pastSurgeries')}>
            Add Surgery
          </button>
        </div>

        <br />
         
      </form>
    </div>
  );
}

export default MedicalInfo;
