import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://trading-app-backend-pf6b.onrender.com/login",
        {
          email,
          password,
        },
      );

      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      setMessage("Login successful!");

      window.location.href = `https://trading-app-dashboard-omega.vercel.app?token=${res.data.accessToken}`;
      // window.location.href = `http://localhost:3000?token=${res.data.accessToken}`;
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg border-0"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        {" "}
        <div className="card-body p-4">
          {" "}
          <h2 className="text-center fw-bold mb-4">Welcome Back </h2>
          <p className="text-center text-muted mb-4">Login to your account</p>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              Login
            </button>
          </form>
          <p className="text-muted mt-3">Didn't have an account?</p>
          <button
            type="button"
            className="btn btn-secondary w-100 py-2 fw-semibold"
            onClick={handleSignup}
          >
            Signup
          </button>
          {message && (
            <div
              className={`alert mt-3 ${
                message.toLowerCase().includes("successful")
                  ? "alert-success"
                  : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
