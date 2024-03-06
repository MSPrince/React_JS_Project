import React, { useState } from "react";
import "./Register.css";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import datata from '../../db.json';
import logo from '../assets/logo-removebg.png'


const Register = () => {
  const [username, usernamechange] = useState("M S Prince");
  const [emailAddress, emailadresschange] = useState("manseeprince@gmail.com");
  const [dob, dobchange] = useState("");
  const [address, adresschange] = useState("jaunpur");
  const [password, passwordchange] = useState("");
  const [confirmPassword, confirmpasswordchange] = useState("");


   const handleSubmit = (e) => {
     e.preventDefault();
     // Check if password and confirmPassword match
     if (password !== confirmPassword) {
       alert("Passwords do not match!");
       return;
     }

     // Process form data here (e.g., send it to a server)
     let regobj = {
       username,
       emailAddress,
       dob,
       address,
       password,
       confirmPassword,
     };

     fetch("http://localhost:3000/user", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(regobj),
     })
       .then((res) => {
            toast.success("Registered Successfully");
       }).catch((err) => {
            toast.error('Error Occured' + err.message);
       });
   };

  return (
    <div className="bodyyyyy">
      <div className="container-fluid">
        <div className="container">
          <div className="login-container">
            <div className="login-img">
              <img  src={logo} width="500px" alt="Logo" />
              <p>
                Don't Stop medication because now you feel fine. Please follow
                doctor prescription 
              </p>
            </div>
            <div className="signup-form">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    User Name:
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter user name"
                    value={username}
                    onChange={(e) => usernamechange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email address"
                    value={emailAddress}
                    onChange={(e) => emailadresschange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    placeholder="Enter date of birth"
                    value={dob}
                    onChange={(e) => dobchange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => adresschange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => passwordchange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => confirmpasswordchange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <div className="mb-3">
                  <p>
                    Already have an account?{" "}
                    <a href="./loginpage.html" className="text-decoration-none">
                      Log In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
