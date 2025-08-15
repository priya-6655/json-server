import React, { useState } from 'react'
import Logo from '../assets/company-logo1.png'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const [input, setInput] = useState({ usrName: "", password: "" })
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        const { id, value } = e.target
        setInput(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const goToMainPage = () => {
        if (input.usrName === 'user' && input.password === 'user') {
            navigate('/mainPage')
        } else {
            alert("You are not authorized person!")
        }
    }
    return (
        <>
            <div className='container-fill' id='mainImg'>
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
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item d-flex flex-row align-items-center">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>

                                <li className="nav-item d-flex flex-row align-items-center">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="col-4 mx-auto mt-5">
                    <form className="p-4" style={{ backgroundColor: " rgb(49, 42, 51)", borderRadius: "10px" }}>
                        <div className="border border-danger bg-light p-4">
                            <div className="d-flex flex-column gap-4">
                                <p className="text-center fs-5 fw-bold">LOGIN</p>
                                <input required type="text" id="usrName" placeholder="Username" className="form-control" value={input.usrName} onChange={handleChange} />

                                <div className='position-relative w-100'>
                                    <input required type="password" id="password" placeholder="Password" className="form-control pe-5" value={input.password} onChange={handleChange} />
                                    {/* <i className={`fa-solid ${showPass ? 'fa-eye' : 'fa-eye-slash'}`} style={{ right: "15px", top: "50%", cursor: 'pointer', position: "absolute", transform: "translateY(-50%)" }} onClick={togglePassword}></i> */}
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className='d-flex align-items-center gap-3 p-2'>
                                        <input type="checkbox" id="check" />
                                        <label>Remember me</label>
                                    </div>
                                    <button type="button" className="btn btn-warning mx-4" onClick={goToMainPage}>Login</button>
                                </div>

                            </div>
                        </div>
                        <div className="mt-2 text-center">
                            <span className="text text-danger">Forget Password?<a href="#" className="mx-3 text-decoration-none">Click here to reset it.</a></span>
                        </div>
                    </form>

                </div >
            </div>
        </>
    )
}

export default LandingPage
