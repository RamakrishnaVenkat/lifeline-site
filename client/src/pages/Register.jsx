import React,{useState} from 'react'
import PersonalInfo from './PersonalInfo';
import MedicalInfo from './MedicalInfo';
import FamilyInfo from './FamilyInfo';
import './Register.css'
function Register() {
  const [page,setPage]= useState(0);
  const [familyMembers,setFamilyMembers]= useState([]);
  const [formData,setFormData]= useState({
    username: '',
    password: '',
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
  const [medicalConditions, setMedicalConditions] = useState({
    prolongedMedicalConditions: [],
    allergies: [],
    pastSurgeries: [],
  });
  

  

  const FormTitles = ["Personal Information","Medical Information","Family Information"];

  const PageDisplay = () =>{
    if (page === 0){
      return <PersonalInfo formData={formData} setFormData={setFormData}/>;
    }else if (page === 1){
      return <MedicalInfo medicalConditions={medicalConditions} setMedicalConditions={setMedicalConditions}/>;
    }else{
      return <FamilyInfo familyMembers={familyMembers} setFamilyMembers={setFamilyMembers} />;
    }
  }

  return (
    <div className='form'>
      
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
          <button disabled= {page == 0} onClick={() =>{setPage((currPage)=> currPage-1);}}>Prev</button>
          <button onClick={() =>{
            if(page ===FormTitles.length-1){
              alert("FORM SUBMITTED");
              console.log(formData);
              console.log(familyMembers);
              console.log(medicalConditions);
            }else{
              setPage((currPage)=> currPage+1);
          }
          }}>
            { page === FormTitles.length-1 ? "Submit": "Next"}</button>
        </div>

      </div>
      
    
  )
}

export default Register

