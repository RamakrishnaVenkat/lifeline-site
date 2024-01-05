import React from 'react'
import { Link,useLocation} from 'react-router-dom';
import { useState,useEffect } from 'react';


function Home() {
  const location = useLocation();
  const [medicalConditions, setMedicalConditions] = useState(null);

  useEffect(() => {
    if (location.state && location.state.medicalConditions) {
      setMedicalConditions(location.state.medicalConditions);
    }
  }, [location.state]);
  const [data,setData]= useState({
    
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    bloodGroup: '',
    dateOfBirth: '',
    contact: '',
    address: '',
    
  })
  return (
    
    

    <div className='pl-10 pt-5'>
      <div className="px-4 sm:px-0">
        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Welcome,Elaine Frost</h2>
        
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Elaine Frost</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Date Of Birth</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">01/01/1975</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">123St, New York</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Contact</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">90123456789</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Height</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">175</dd>
          </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Weight</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">75</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">Age</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">48</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900">blood group</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">B+ve</dd>
          </div>
          
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-large font-medium leading-6 text-gray-900">Medical Information</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {medicalConditions && (
            <ul>
              {medicalConditions.medical_conditions.map((condition, index) => (
                
                <li key={index}>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-base font-medium leading-6 text-gray-900">Condition Name:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{condition.conditionName}</dd>
                  <dt className="text-base font-medium leading-6 text-gray-900">Diagnosis Date:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{condition.diagnosisDate}</dd>
                  <dt className="text-base font-medium leading-6 text-gray-900">Treatment:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{condition.treatment}</dd>

                  </div>
                  
                </li>
              ))}
              {medicalConditions.allergies.map((allergy, index) => (
                
                <li key={index}>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-base font-medium leading-6 text-gray-900">Allergy Name:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{allergy.allergyName}</dd>
                  <dt className="text-base font-medium leading-6 text-gray-900">Severity:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{allergy.severity}</dd>
                  
                  </div>
                  
                </li>
              ))}
              {medicalConditions.past_surgeries.map((surgery, index) => (
                
                <li key={index}>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-base font-medium leading-6 text-gray-900">Surgery Name:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{surgery.surgeryName}</dd>
                  <dt className="text-base font-medium leading-6 text-gray-900">Surgery Date:  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{surgery.surgeryDate}</dd>


                  </div>
                  
                </li>
              ))}
            </ul>
          )}
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <Link to="/MedicalInfo" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add medical condition
                    </Link>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    
                  </div>
                </li>
                
              </ul>
            </dd>
            
          </div>
          
        </dl>
          
      </div>
    </div>
      
    
  )
}

export default Home




 
