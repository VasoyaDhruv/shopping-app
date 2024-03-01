import { useState } from 'react'

import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import DashBoard from './pages/DashBoard'
import Cart from "../src/components/core/Cart"
import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import { ACCOUNT_TYPE } from './utils/contants'
import Records from './components/Dashboard/Records'

function App() {
  const user = useSelector((state) => state.profile)
  return (
    <div>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
        <Route path="/cart" element={<Cart/>}/>

        {
        user?.accountType === ACCOUNT_TYPE.SELLER && (
          <>
          <Route path="dashboard/records" element={<Records />} />
          </>
        )
      }
        <Route
          element={
           <PrivateRoute>
              <DashBoard/>
           </PrivateRoute>  
          }>
        <Route path="/dashboard" element={<DashBoard/>} />
       </Route>
     </Routes>

     

    </div>
  )
}

export default App
