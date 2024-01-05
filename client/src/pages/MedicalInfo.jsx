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
    <div className='custom-padding medical-info-container'>
      
      <form onSubmit={handleSubmit} className="min-h-screen bg-white shadow-md px-8 pt-6 pb-8 mb-4 dark:bg-slate-900" >
        <div>
          <p className=" pt-5 pb-5 block text-gray-700 text-sm font-bold mb-2 dark:text-white">
            If you have/had any medical conditions for a prolonged time and took up treatment, please mention below:
          </p>
          {medicalConditions.medical_conditions.map((condition, index) => (
            <div key={index}>
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Condition Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-500 dark:border-slate-800 dark:text-white'
                  type="text"
                  name="conditionName" placeholder='Enter Condition Name'
                  value={condition.conditionName || ''}
                  onChange={(e) => handleInputChange(e, 'medical_conditions', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Diagnosis Date:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-500 dark:border-slate-800 dark:text-white'
                  type="date"
                  name="diagnosisDate"
                  value={condition.diagnosisDate || ''}
                  onChange={(e) => handleInputChange(e, 'medical_conditions', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Treatment:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-500 dark:border-slate-800 dark:text-white'
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
         <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>


        </div>

        <div>
          <p className=" pt-5 pb-5 block text-gray-700 text-sm font-bold mb-2 dark:text-white">If you have allergies, choose them and choose their severity:</p>
          {medicalConditions.allergies.map((allergy, index) => (
            <div key={index}>
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Allergy Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-500 dark:border-slate-800 dark:text-white'
                  type="text"
                  name="allergyName" placeholder='Enter Allergy Name'
                  value={allergy.allergyName || ''}
                  onChange={(e) => handleInputChange(e, 'allergies', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Severity:
                <select className='form-input dark:bg-slate-800'
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
          <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
        </div>

        <div>
          <p className="pt-5 pb-5 block text-gray-700 text-sm font-bold mb-2 dark:text-white">If you have undergone surgeries in the past, enter the details below:</p>
          {medicalConditions.past_surgeries.map((surgery, index) => (
            <div key={index}>
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Surgery Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-500 dark:border-slate-800 dark:text-white'
                  type="text"
                  name="surgeryName" placeholder='Enter Surgery'
                  value={surgery.surgeryName || ''}
                  onChange={(e) => handleInputChange(e, 'past_surgeries', index)}
                />
              </label>
              <br />
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white'>
                Surgery Date:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-500 dark:border-slate-800 dark:text-white'
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
          <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
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
