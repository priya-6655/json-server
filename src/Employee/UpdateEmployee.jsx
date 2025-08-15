import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/company-logo1.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateEmployee() {
    const navigate = useNavigate()
    const [empList, setEmplist] = useState([])
    const [selectedEmpId, setSelectedEmpId] = useState('')
    const [viewempDate, setViewEmpDate] = useState(false)
    const [selectedEmp, setSelectedEmp] = useState(null)
    const firstNameRef = useRef(null)

    const moveToViewPages = () => {
        navigate('/mainPage')
    }

    const moveToAddPage = () => {
        navigate('/addEmp')
    }

    const moveToDelete = () => {
        navigate('/deleteEmp')
    }

    useEffect(() => {
        fetch('https://json-server-three-ruby.vercel.app/employee')
            .then(res => res.json())
            .then(data => setEmplist(data))
            .catch(err => console.error('Fetching Error', err))
        if (viewempDate && firstNameRef.current) {
            firstNameRef.current.focus()
        }
    }, [viewempDate])

    const handleViewUpdate = (e) => {
        e.preventDefault()
        const foundEmp = empList.find(emp => emp.id === selectedEmpId)
        if (selectedEmpId) {
            setSelectedEmp(foundEmp)
            setViewEmpDate(true)
        } else {
            alert("Employee not found")
        }
    }

    const handleUpdate = (e) => {
        const { id, value } = e.target
        setSelectedEmp(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const updateEmpData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`https://json-server-three-ruby.vercel.app/employee/${selectedEmp.id}`, selectedEmp, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('Updated', response)
            alert("Update Successfull")
        } catch (error) {
            console.log("error fetching data", error)
            alert("Something went wrong")
        }
    }
    return (
        <div className='container-fill' id='mainPageimg'>
            <div className="container-fluid bg-info d-flex align-items-center justify-content-center">
                <img src={Logo} alt='Logo' className="img-fluid evote mx-4" />
                <p className="mx-auto mt-1 fs-4 fw-bold">Trafco Group</p>
            </div>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-end">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myheader">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myheader">
                        <ul className="navbar-nav gap-5">

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.freepik.com/256/1001/1001221.png?semt=ais_hybrid" alt="logout" className="img-fluid logout" />
                                <a className="nav-link" href="#" onClick={moveToAddPage} >Add</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/10650/10650271.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link " href="#" onClick={moveToViewPages}>View</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5278/5278658.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link active" href="#" >Update</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://static.vecteezy.com/system/resources/previews/022/159/677/non_2x/3d-illustration-website-ui-kit-trash-bin-png.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link" href="#" onClick={moveToDelete}>Delete</a>
                            </li>


                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/4421/4421772.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            {!viewempDate && (
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fs-4 fw-bold text-danger mt-3'>Update Employee</p>
                        <img src="https://cdn-icons-png.freepik.com/512/6833/6833605.png" alt='profile1' className='img-fluid mt-2' style={{ width: "150px", height: "150px" }} />

                        <select className="form-select mt-2 w-100" value={selectedEmpId} onChange={(e) => setSelectedEmpId(e.target.value)}>
                            <option value=''>Select Employee Name</option>

                            {empList.map((item, index) => (
                                <option style={{ textTransform: 'capitalize' }} key={index} value={item.id}>{item.firstName}</option>
                            ))}
                        </select>

                        <button type='button' className='btn btn-success rounded-pill w-50 mt-5' onClick={handleViewUpdate}>View</button>
                    </div>
                </div>

            )}

            {viewempDate && (
                <div className='col-6 mx-auto align-items-center justify-content-center'>
                    <form className='border border-danger mt-5' style={{ borderRadius: "20px" }} onSubmit={updateEmpData}>
                        <p className="text-center mb-5 text-success fw-bold fs-4">Employee Form</p>
                        <div className="row mb-3">
                            <label htmlFor="id" className="form-label col-sm-3 fw-bold">Employee id:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="id" value={selectedEmp?.id || ""} readOnly />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='firstName' className='form-label col-sm-3 fw-bold'>First Name</label>
                            <div className='col-sm-6'>
                                <input ref={firstNameRef} type='text' className='form-control' id='firstName' value={selectedEmp?.firstName || ""} onChange={handleUpdate} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='lastName' className='form-lable col-sm-3 fw-bold'>Last Name</label>
                            <div className='col-sm-6'>
                                <input type='text' className='form-control' id='lastName' value={selectedEmp?.lastName || ""} onChange={handleUpdate} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='salary' className='form-label col-sm-3 fw-bold'>Salary</label>
                            <div className='col-sm-6'>
                                <input type='number' className='form-control' id='salary' value={selectedEmp?.salary || ""} onChange={handleUpdate} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='address' className='form-label col-sm-3 fw-bold'>Address</label>
                            <div className='col-sm-6'>
                                <input type='text' className='form-control' id='address' value={selectedEmp?.address || ""} onChange={handleUpdate} />
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <button type='submit' className='btn btn-success rounded-pill w-25 mb-5 mt-3'>Update</button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    )
}

export default UpdateEmployee
