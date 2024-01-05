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
    <div>
    <div className='custom-padding mt-10 min-h-screen px-10 pl-10 dark:bg-slate-900 '>
      <div className="px-4 sm:px-0 flex justify-between">
        <h2 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-white">Welcome, Elaine Frost</h2>
        <h2 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-white">Medical ID: <span className='text-slate-600 dark:text-slate-400'>MED9987</span></h2>
        
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100 dark:divide-slate-800">
        
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
            <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Name</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">Elaine Frost</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Date Of Birth</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">01/01/1975</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Address</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">123St, New York</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">90123456789</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">175 cm</dd>
          </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Weight</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">75 kg</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Age</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">49 yrs</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Blood group</dt>
          <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-200">B+ve</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center"></div>
          
      </dl> 
      </div>   
      </div>
    <div className=' px-10 pl-10 dark:bg-slate-900 '>
      <div className="px-4 sm:px-0 flex justify-between">
      <h2 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-white">Medical Information</h2>
      </div>
      
  {medicalConditions?.medical_conditions?.length > 0 &&(
  <div className="relative overflow-x-auto max-w-screen-md mx-auto">
  <h3 className="text-xl font-semibold leading-7 text-gray-700 dark:text-white pt-6 pb-5">Condition</h3>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
      <tr>
        <th scope="col" className="px-6 py-3">
          Condition Name
        </th>
        <th scope="col" className="px-6 py-3">
          Diagnosis Date
        </th>
        <th scope="col" className="px-6 py-3">
          Treatment
        </th>
      </tr>
    </thead>
    <tbody>
      {medicalConditions.medical_conditions.map((condition, index) => (
        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {condition.conditionName}
          </td>
          <td className="px-6 py-4">
            {condition.diagnosisDate}
          </td>
          <td className="px-6 py-4">
            {condition.treatment}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  )}
  {medicalConditions?.allergies?.length > 0 && (
  <div className="relative overflow-x-auto mt-8 max-w-screen-md mx-auto">
    <h3 className="text-xl font-semibold leading-7 text-gray-700 dark:text-white pt-6 pb-5">Allergy</h3>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
      <tr>
        <th scope="col" className="px-6 py-3">
          Allergy Name
        </th>
        <th scope="col" className="px-6 py-3">
          Severity
        </th>
      </tr>
    </thead>
    <tbody>
      {medicalConditions.allergies.map((allergy, index) => (
        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {allergy.allergyName}
          </td>
          <td className="px-6 py-4">
            {allergy.severity}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )}
  {medicalConditions?.past_surgeries?.length > 0 &&(
  <div className="relative overflow-x-auto mt-8 max-w-screen-md mx-auto">
    <h3 className="text-xl font-semibold leading-7 text-gray-700 dark:text-white pt-6 pb-5">Past Surgeries</h3>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
      <tr>
        <th scope="col" className="px-6 py-3">
          Surgery Name
        </th>
        <th scope="col" className="px-6 py-3">
          Surgery Date
        </th>
      </tr>
    </thead>
    <tbody>
      {medicalConditions.past_surgeries.map((surgery, index) => (
        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {surgery.surgeryName}
          </td>
          <td className="px-6 py-4">
            {surgery.surgeryDate}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )} 
  {!(medicalConditions?.medical_conditions?.length > 0 || medicalConditions?.allergies?.length > 0 || medicalConditions?.past_surgeries?.length > 0) && (
    <p className="text-lg text-gray-700 dark:text-white mt-8 text-center ">No medical records available</p>
  )}
 
 <div className="flex w-0 flex-1 items-center pl-20 pt-10 ">
                    
 <div className="ml-20 pl-20  flex justify-center mb-5">
                    <Link to="/MedicalInfo" className="bg-white hover:bg-gray-100 text-gray-800 px-3 pt-1 text-sm font-semibold border border-gray-400 rounded shadow w-[100px] h-[30px]"><span>Add Record</span>
                    </Link>
                    </div>
                    
                </div>
    </div>
    </div>    
    

   
  )
}

export default Home




 
