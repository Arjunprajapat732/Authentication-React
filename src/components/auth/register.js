import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});

    const handleInputChange = (e) => {
        setUserdata(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}api/register`, userdata);
            const response = await axios.post("http://localhost:8000/api/register", userdata);
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem("token" , response.data.token);
                navigate("/dashboard");
            }
            toast.success(response.data.message, { position: "top-right" });
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "An error occurred", { position: "top-right" });
        }
    };
    return(
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" name="fullName" required onChange={handleInputChange} className="form-control" id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" required onChange={handleInputChange} className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" required onChange={handleInputChange} className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" name="confirmPassword" required onChange={handleInputChange} className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <br></br>
                    <Link className="btn btn-primary" to="/">Login</Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register;