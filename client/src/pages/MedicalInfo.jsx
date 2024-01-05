import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MedicalInfo() {
  const navigate = useNavigate()
    const [medicalConditions, setMedicalConditions] = useState({
        medical_conditions: [],
        allergies: [],
        past_surgeries: [],
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', medicalConditions);
    navigate('/', {state:{medicalConditions}});
    
  };
  

  return (
    <div className='medical-info-container'>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div>
          <p className=" pt-5 pb-5 block text-gray-700 text-sm font-bold mb-2">
            If you have/had any medical conditions for a prolonged time and took up treatment, please mention below:
          </p>
          {medicalConditions.medical_conditions.map((condition, index) => (
            <div key={index}>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Condition Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="text"
                  name="conditionName" placeholder='Enter Condition Name'
                  value={condition.conditionName || ''}
                  onChange={(e) => handleInputChange(e, 'medical_conditions', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Diagnosis Date:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="date"
                  name="diagnosisDate"
                  value={condition.diagnosisDate || ''}
                  onChange={(e) => handleInputChange(e, 'medical_conditions', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Treatment:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="text"
                  name="treatment" placeholder='Enter the treatment taken up'
                  value={condition.treatment || ''}
                  onChange={(e) => handleInputChange(e, 'medical_conditions', index)}
                />
              </label>
              <br />
            </div>
          ))}
         <button className="bg-white hover:bg-gray-100 text-2xl text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button" onClick={() => handleAddEntry('medical_conditions')}>
            +
          </button>


        </div>

        <div>
          <p className=" pt-5 pb-5 block text-gray-700 text-sm font-bold mb-2">If you have allergies, choose them and choose their severity:</p>
          {medicalConditions.allergies.map((allergy, index) => (
            <div key={index}>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Allergy Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="text"
                  name="allergyName" placeholder='Enter Allergy Name'
                  value={allergy.allergyName || ''}
                  onChange={(e) => handleInputChange(e, 'allergies', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2'>
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
          <button className="bg-white hover:bg-gray-100 text-gray-800 text-2xl font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button" onClick={() => handleAddEntry('allergies')}>
            +
          </button>
        </div>

        <div>
          <p className="pt-5 pb-5 block text-gray-700 text-sm font-bold mb-2">If you have undergone surgeries in the past, enter the details below:</p>
          {medicalConditions.past_surgeries.map((surgery, index) => (
            <div key={index}>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Surgery Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="text"
                  name="surgeryName" placeholder='Enter Surgery'
                  value={surgery.surgeryName || ''}
                  onChange={(e) => handleInputChange(e, 'past_surgeries', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Surgery Date:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type="date"
                  name="surgeryDate"
                  value={surgery.surgeryDate || ''}
                  onChange={(e) => handleInputChange(e, 'past_surgeries', index)}
                />
              </label>
              <br />
            </div>
          ))}
          <button className="bg-white hover:bg-gray-100 text-gray-800 text-2xl font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button" onClick={() => handleAddEntry('past_surgeries')}>
            +
          </button>
        </div>

        <br />
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >
            Submit
          </button>
      </form>
    </div>
  );
}

export default MedicalInfo;
