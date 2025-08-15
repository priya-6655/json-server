import React, { useEffect, useState } from 'react'
import Logo from '../assets/company-logo1.png'
import { useNavigate } from 'react-router-dom'


function MainPage() {
    const [employeeList, setEmployeeList] = useState([])
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/employee`)
            .then((res) => res.json())
            .then((data) => setEmployeeList(data))
            .catch((err) => console.error("Fetch error", err))
    }, [])

    const moveToAddPage = () => {
        navigate('/addEmp')
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
                                <a className="nav-link" href="#" onClick={moveToAddPage}>Add</a>
                            </li>

                            <li className="nav-item d-flex flex-row align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/10650/10650271.png" alt="logout" className="img-fluid logout" />
                                <a className="nav-link active" href="#" onClick={moveToViewPages}>View</a>
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

            <div className='container-fill'>
                <h3 className='text-danger text-center'>Employee List</h3>
                <table className="table table-bordered table-striped mt-3 table-hover fw-bold">
                    <thead>
                        <tr>
                            <td>Emp Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Salary</td>
                            <td>Address</td>
                        </tr>
                    </thead>


                    <tbody>
                        {employeeList.map((itm, idx) => (
                            <tr key={idx}>
                                <td>{itm.id}</td>
                                <td>{itm.firstName}</td>
                                <td>{itm.lastName}</td>
                                <td>{itm.salary}</td>
                                <td>{itm.address}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MainPage
