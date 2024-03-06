import React from "react";
import logo from "../assets/logo-removebg.png";
import "./Login.css"; // Assuming you have a CSS file for styling

const Login = () => {
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-img">
          <img src={logo} width="500px" alt="Logo" />
          <p>
            Don't stop medication because now you feel fine. Please follow
            doctor's prescription.
          </p>
        </div>
        <div className="login-form">
          <form action="login.php" method="POST">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label sr-only">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
            <div className="mb-3">
              <p>
                Don't have an account?{" "}
                <a href="signup.html" className="text-decoration-none">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
