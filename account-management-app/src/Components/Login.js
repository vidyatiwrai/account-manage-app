// src/components/Login.js
import React, { useState } from 'react';
import '../index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful login (replace this with your actual login logic)
    const simulatedLoginSuccess = true;

    if (simulatedLoginSuccess) {
      setLoginSuccess(true);
      // Clear the email and password fields after successful login
      setEmail('');
      setPassword('');
    } else {
      // Handle login failure (e.g., show an error message)
      setLoginSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address                
          </label>
             {/* Email Input */}

          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
           {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
            {/* Submit Button */}

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {/* Display Success Message if login is successful */}
{loginSuccess && (
  <div className="alert alert-success" role="alert">
    Login successful !!!.
  </div>
)}

    </div>
  );
};

export default Login;
