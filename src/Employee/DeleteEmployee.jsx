import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/company-logo1.png'
import axios from 'axios'

function DeleteEmployee() {
    const navigate = useNavigate()
    const [delEmpDetails, setDelEmpDetails] = useState([])
    const [viewDelEmp, setViewDelEmp] = useState(false)
    const [selectedDelEmp, setSelectedDelEmp] = useState(null)
    const [delEmpId, setDelEmpId] = useState('')

    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const moveToViewPages = () => {
        navigate('/mainPage')
    }

    const moveToAddPage = () => {
        navigate('/addEmp')
    }

    const moveToUpdate = () => {
        navigate('/updateEmp')
    }

    useEffect(() => {
        axios.get(`${baseURL}/employee`)
            .then(res => setDelEmpDetails(res.data))
            .catch(err => console.error("Fetching error", err))
    }, [])

    const ViewDelEmpDetails = (e) => {
        e.preventDefault()
        const findDelEmp = delEmpDetails.find(emp => emp.id === delEmpId)
        if (delEmpId) {
            setSelectedDelEmp(findDelEmp)
            setViewDelEmp(true)
        }
    }

    const deleteEmpData = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`${baseURL}/employee/${delEmpId}`)
            alert('Employee deleted successfully')
            setSelectedDelEmp(null);
        } catch (error) {
            console.error("Delete error", error);
            alert("Failed to delete employee");
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
                                <a className="nav-link" href="#" onClick={moveToUpdate}>Update</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://static.vecteezy.com/system/resources/previews/022/159/677/non_2x/3d-illustration-website-ui-kit-trash-bin-png.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link active" href="#" >Delete</a>
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


            {!viewDelEmp && (
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fs-4 fw-bold text-danger mt-3'>Delete Employee</p>
                        <img src="https://cdn-icons-png.freepik.com/512/6833/6833605.png" alt='profile1' className='img-fluid mt-2' style={{ width: "150px", height: "150px" }} />

                        <select className="form-select mt-2 w-100" value={delEmpId} onChange={(e) => setDelEmpId(e.target.value)}>
                            <option value=''>select employee name</option>

                            {delEmpDetails.map((item, index) => (
                                <option key={index} value={item.id}>{item.firstName}</option>
                            ))}
                        </select>

                        <button type='button' className='btn btn-success rounded-pill w-50 mt-5' onClick={ViewDelEmpDetails}>View</button>
                    </div>
                </div>
            )}

            {viewDelEmp && (
                <div className='col-6 mx-auto align-items-center justify-content-center'>
                    <form className='border border-danger mt-5' style={{ borderRadius: "20px" }} onSubmit={deleteEmpData}>
                        <p className="text-center mb-5 text-success fw-bold fs-4">Employee Form</p>
                        <div className="row mb-3">
                            <label htmlFor="id" className="form-label col-sm-3 fw-bold">Employee id:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="id" value={selectedDelEmp?.id || ""} readOnly />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='firstName' className='form-label col-sm-3 fw-bold'>First Name</label>
                            <div className='col-sm-6'>
                                <input type='text' className='form-control' id='firstName' value={selectedDelEmp?.firstName || ""} readOnly />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='lastName' className='form-lable col-sm-3 fw-bold'>Last Name</label>
                            <div className='col-sm-6'>
                                <input type='text' className='form-control' id='lastName' value={selectedDelEmp?.lastName || ""} readOnly />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='salary' className='form-label col-sm-3 fw-bold'>Salary</label>
                            <div className='col-sm-6'>
                                <input type='number' className='form-control' id='salary' value={selectedDelEmp?.salary || ""} readOnly />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='address' className='form-label col-sm-3 fw-bold'>Address</label>
                            <div className='col-sm-6'>
                                <input type='text' className='form-control' id='address' value={selectedDelEmp?.address || ""} readOnly />
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <button type='submit' className='btn btn-success rounded-pill w-25 mb-5 mt-3'>Delete</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default DeleteEmployee
