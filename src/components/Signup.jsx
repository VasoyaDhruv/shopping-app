import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_TYPE } from '../utils/contants';
import { signup } from '../services/operations/authAPI';

const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        AccountType:ACCOUNT_TYPE.PERSONAL        
      })
    const {email, password,confirmPassword,AccountType} = formData;

    const handleOnChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };  
  const handleOnSubmit = (e) => {
    try{
      e.preventDefault();
      dispatch(signup(email,password,confirmPassword,AccountType,navigate))
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div className=' bg-slate-300 shadow-md rounded-md'>
         <h3 className='text-gray-600 font-bold text-3xl flex p-5 justify-center'>Sign Up</h3>
          <form onSubmit={handleOnSubmit} className='w-[20rem] p-3 flex flex-col justify-center'>
          <label className='text-gray-700 font-semibold gap-2 flex'>
        Select Account Type:
        <select onChange={handleOnChange}  className='bg-gray-200 outline-none px-2 rounded-md'>
          <option value="personal" >Personal</option>
          <option value="business">Business</option>
        </select>
      </label>
           
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="email" >Your email</label>
          <input type="email" 
                 id="email"
                 name='email'
                 onChange={handleOnChange}
                 className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="password" >Password</label>
          <input type="password" 
                 id="password"
                 name='password'
                 onChange={handleOnChange}
                 className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder='password' required />
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="confirmpassword" >Confirm Password</label>
          <input type="password"
                 onChange={handleOnChange}
                  id="confirmPassword" 
                  name='confirmPassword'
                  className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder='password' required />
        </div>

        <button type='submit'
          className='mt-6 rounded-[8px] bg-gray-900 hover:bg-gray-700 duration-200 py-[8px] px-[50px] font-medium text-richblack-900'
          >SignUp</button>
    </form>  
    </div>
  )
}

export default Signup