import { useState } from 'react'

import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import DashBoard from './pages/DashBoard'

import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import { ACCOUNT_TYPE } from './utils/contants'
import Footer from './components/Footer'
import MyProfile from './components/Dashboard/MyProfile'
import Settings from './components/Dashboard/Settings'
import { Card } from '@material-tailwind/react'
import Cart from './components/Dashboard/Cart'



function App() {
  const user = useSelector((state)=>state.profile.user)

  return (
    <div>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
        <Route path="/cart" element={<Cart/>}/>

        <Route
        path='/dashboard'
          element={
           <PrivateRoute>
              <DashBoard/>
           </PrivateRoute>  
          }>
        <Route path="dashboard/my-profile" element={<MyProfile />} />
       </Route>
       
       
        {
          user?.AccountType === ACCOUNT_TYPE.PERSONAL &&(
            <Route path='/cart' element={<Cart/>}/>
          )
        }
       {/* {
            user?.AccountType === ACCOUNT_TYPE.BUSINESS && (
            <>
              <Route path="dashboard/records" element={<Records/>} />
            </>
          )
        } */}
     </Routes>

     
    </div>
  )
}

export default App
