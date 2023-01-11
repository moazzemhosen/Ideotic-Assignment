import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Breeds from '../pages/Breeds'
import Login from '../pages/Login'
import Details from '../pages/Details'
import Navbar from '../components/Navbar'

const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Breeds/>}/>
            <Route path='/l' element={<Login/>}/>
            <Route path='/breeds/:id' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute