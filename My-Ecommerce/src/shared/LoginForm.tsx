import React, { useState } from 'react'
import ActionButton from './ActionButton';




const LoginForm: React.FC = () =>{

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

    //Handle form submisssion
    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>)=> {
      event.preventDefault();
      console.log("Submitted data", formData);
    }
  return (
    <form className='mt-4'>
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
        <ActionButton to='/loginpage'> Sign-In</ActionButton>
      </div>
      </form>
  )
}

export default LoginForm;