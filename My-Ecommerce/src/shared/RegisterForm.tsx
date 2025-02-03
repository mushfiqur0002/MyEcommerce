import React, { useState } from 'react'
import ActionButton from './ActionButton';



//User Login form
const RegisterForm: React.FC = () =>{

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

  return (
    
    <form className='mt-4'>
    {/* Full name  */}
    <div>
        <label htmlFor="email" className='block font-medium text-gray-700 mb-2'>Full name</label>
        <input
          type="userName"
          id="username"
          name="userName"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Full name"
          className=' border border-gray-400 rounded-md p-2 mb-2 text-black focus:outline-1'
          required
        />
      </div>

      {/* Email Section */}
      <div>
        <label htmlFor="email" className='block font-medium text-gray-700 mb-2'>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className=' border border-gray-400 rounded-md p-2 mb-2 text-black focus:outline-1'
          required
        />
      </div>
      {/* Password section */}
      <div>
        <label htmlFor="password" className='block font-medium text-gray-700 mb-2 ' >Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className=' border border-gray-400 rounded-md p-2 mb-2 text-black focus:outline-1'
          required
        />
      </div>
      <div className='mt-4'> 
        <ActionButton to='/loginpage'>Register</ActionButton>
      </div>
      </form>
  )
}

export default RegisterForm;