import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from '../Employee/LandingPage'
import MainPage from '../Employee/MainPage'
import AddEmployee from '../Employee/AddEmployee'
import UpdateEmployee from '../Employee/UpdateEmployee'
import DeleteEmployee from '../Employee/DeleteEmployee'


function FilePath() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Landingpage />} />
                <Route path='/mainPage' element={<MainPage />} />
                <Route path='/addEmp' element={<AddEmployee />} />
                <Route path='/updateEmp' element={<UpdateEmployee />} />
                <Route path='/deleteEmp' element={<DeleteEmployee />} />
            </Routes>
        </div>
    )
}

export default FilePath
