import React from 'react'
import logo from "../../assets/images.png"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { logout } from '../../services/operations/authAPI'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.profile.user)
  

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    
<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 right-0 left-0 ">
  <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
  <Link to="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img src={logo} className=" rounded-full w-10 h-10" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Easymart</span>
      </Link>
 
  <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
   <div className=" flex gap-4 items-center  ">
      
     {
      token === null &&(
        <Link to="/login">
         <button className='  text-white  rounded-[8px] bg-gray-500 hover:bg-gray-600 duration-200 
         py-[8px] px-[30px] font-medium text-richblack-900'>Login</button>
       </Link>
      )
     }
       {
      token === null &&(
        <Link to="/signup">
          <button className=' text-white  rounded-[8px] bg-gray-500 hover:bg-gray-600 duration-200 
          py-[8px] px-[30px] font-medium text-richblack-900'>SignUp</button>
        </Link>
      )
     }
     {
      token !== null &&(
        <Link to="/cart">
          <button className='text-white  rounded-[8px] bg-gray-500 hover:bg-gray-600 duration-200 
          py-[8px] px-[30px] font-medium text-richblack-900'>cart</button>
        </Link>
      )
     }  
        {
         token !== null &&(
        <Link>
          <button className='text-white  rounded-[8px] bg-gray-500 hover:bg-gray-600 duration-200 
          py-[8px] px-[30px] font-medium text-richblack-900' onClick={handleLogout}>Log Out</button>
        </Link>
      )
     }
    
      
  </div>
  </div>  
</nav>

  )
}

export default Navbar