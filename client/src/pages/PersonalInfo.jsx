import React, { useState } from 'react';

function PersonalInfo() {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  return (
    <div className='personal-info-container'>
      
      <form >
        <div className='Form-column'>
        <label className='form-label'>
          Username:
          <input className='form-input'type="text" name="username" placeholder="Enter UserName" value={formData.username} onChange={handleInputChange} required />
        </label>
        <br />

        <label className='form-label'>
          Password:
          <input className='form-input'type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange} required />
        </label>
        <br />
        </div>
        <div className='Form-column'>
        <label className='form-label'>
          Name:
          <input className='form-input'type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />

        <label className='form-label'>
          Age:
          <input className='form-input'type="number" name="age" placeholder="Enter your Age" value={formData.age} onChange={handleInputChange} required />
        </label>
        <br />
        </div>
        <div className='Form-column'>
        <label className='form-label'>
          Height:
          <input className='form-input'type="text" name="height" placeholder='Enter your Height in cm' value={formData.height} onChange={handleInputChange} required />
        </label>
        <br />

        <label className='form-label'>
          Weight:
          <input className='form-input'type="text" name="weight" placeholder='Enter your Weight in kg' value={formData.weight} onChange={handleInputChange} required />
        </label>
        <br />
        </div>
        <div className='Form-column'>
        <label className='form-label'>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option className='form-input' value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />

        <label className='form-label'>
          Blood Group:
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} required>
            <option className='form-input' value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </label>
        <br />
        </div>
        <div className='Form-column'>
        <label className='form-label'>
          Date of Birth:
          <input className='form-input'
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label className='form-label'>
          Contact:
          <input className='form-input' type="text" name="contact" placeholder='Contact number' value={formData.contact} onChange={handleInputChange} required  />
        </label>
        <br />
        </div>
        
        <label className='form-label'>
          Address:
          <input className='form-input'
            name="address" placeholder='Enter Address'
            value={formData.address}
            onChange={handleInputChange} required
          ></input>
        </label>
        <br />

        
      </form>
    </div>
  );
}

export default PersonalInfo;
