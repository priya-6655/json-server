import React, { useState } from 'react'
import Logo from '../assets/company-logo1.png'
import { useNavigate } from 'react-router-dom'

function AddEmployee() {
    const [empData, setEmpData] = useState({ id: "", firstName: "", lastName: "", salary: "", address: "" })
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const handleChange = (e) => {
        const { id, value } = e.target
        setEmpData(prev => ({
            ...prev,
            [id]: value
        }))
    }
    const addEmpData = (e) => {
        e.preventDefault();
        const payload = {
            ...empData,
            id: parseInt((Math.random() + 1) * 100).toString(),
        }
        fetch(`${baseURL}/employee`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Added", data)
                alert("Employee added successfully")
            })
            .catch(err => console.error('Failed to add', err))
    }

    const moveToViewPages = () => {
        navigate('/mainPage')
    }

    const moveToUpdate = () => {
        navigate('/updateEmp')
    }

    const moveToDelete = () => {
        navigate('/deleteEmp')
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
                                <a className="nav-link active" href="#" >Add</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/10650/10650271.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link " href="#" onClick={moveToViewPages}>View</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5278/5278658.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link" href="#" onClick={moveToUpdate}>Update</a>
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

            <div className='col-6 mx-auto align-items-center justify-content-center'>
                <form className='border border-danger mt-5 p-2' style={{ borderRadius: "24px", backgroundColor: 'rgba(0,0,0,0.6)' }} onSubmit={addEmpData}>
                    <p className="text-center mb-5 text-info fw-bold fs-4">Employee Form</p>
                    {/* <div className="row mb-3">
                        <label htmlFor="id" className="form-label col-sm-3 fw-bold text-light">Employee id:</label>
                        <div className="col-sm-6">
                            <input placeholder='Employee ID' type="n" className="form-control" id="id" value={empData.empid} onChange={handleChange} />
                        </div>
                    </div> */}

                    <div className='row mb-3'>
                        <label htmlFor='firstName' className='form-label col-sm-3 fw-bold text-light'>First Name</label>
                        <div className='col-sm-6'>
                            <input placeholder="Firstname" type='text' className='form-control' id='firstName' value={empData.firstName} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='lastName' className='form-lable col-sm-3 fw-bold text-light'>Last Name</label>
                        <div className='col-sm-6'>
                            <input placeholder="Lastname" type='text' className='form-control' id='lastName' value={empData.lastName} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='salary' className='form-label col-sm-3 fw-bold text-light'>Salary</label>
                        <div className='col-sm-6'>
                            <input placeholder="Salary" type='text' className='form-control' id='salary' value={empData.salary} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='address' className='form-label col-sm-3 fw-bold text-light'>Address</label>
                        <div className='col-sm-6'>
                            <input placeholder="Address" type='text' className='form-control' id='address' value={empData.address} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <button type='submit' className='btn btn-success rounded-pill w-25 mb-5 mt-3'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee
