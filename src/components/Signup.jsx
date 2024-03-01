import React, { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const {email, password,confirmPassword} = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        setFormData({
          email: '',
          password: '',
  
        });
      };
  return (
    <div className=' bg-slate-300 shadow-md rounded-md'>
         <h3 className='text-gray-600 font-bold text-3xl flex p-5 justify-center'>Sign Up</h3>
          <form className='w-[20rem] p-3 flex flex-col justify-center'>
           
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="email" >Your email</label>
          <input type="email" 
                 id="email"
                 onChange={handleOnChange}
                 className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="password" >Password</label>
          <input type="password" 
                 id="password"
                 onChange={handleOnChange}
                 className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder='password' required />
        </div>
        <div className="mb-5 flex flex-col gap-2 text-black text-[24px] font-semibold">
          <label htmlFor="confirmpassword" >Confirm Password</label>
          <input type="password"
                 onChange={handleOnChange}
                  id="confirmPassword" 
                  className="text-gray-900 bg-gray-50 text-sm p-2.5 rounded-lg  outline-none" placeholder='password' required />
        </div>

        <button type='submit'
          className='mt-6 rounded-[8px] bg-gray-900 hover:bg-gray-700 duration-200 py-[8px] px-[50px] font-medium text-richblack-900'
          onClick={handleSubmit}>SignUp</button>
    </form>  
    </div>
  )
}

export default Signup