import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../services/operations/authAPI';
import toast from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const { email, password } = formData;
 
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = (e) => {
    try{
      e.preventDefault()
      dispatch(login(email, password, navigate))
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className=' bg-slate-300 shadow-md rounded-md'>
      <h3 className='text-gray-600 font-bold text-3xl flex p-5 justify-center'>Login</h3>
      <form onSubmit={handleOnSubmit} className='w-[20rem] p-3 flex flex-col justify-center'>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="email">Your email</label>
          
          <input
            type="email"
            id="email"
            name='email'
            value={email}
            onChange={handleOnChange}
            className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg outline-none" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name='password'
            value={password}
            onChange={handleOnChange}
            className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg focus:ring-0 outline-none" placeholder='password' required />
        </div>
        <button type='submit'
          className='mt-6 rounded-[8px] bg-gray-900 hover:bg-gray-700 duration-200  py-[8px] px-[50px] font-medium text-richblack-900'
          >login</button>
      </form>
    </div>
  );
}

export default Login;
