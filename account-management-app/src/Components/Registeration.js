import React, { useState } from 'react';
import '../index.css';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful registration (replace this with your actual registration logic)
    const simulatedRegistrationSuccess = true;

    if (simulatedRegistrationSuccess) {
      setRegistrationSuccess(true);
      // Clear the form fields after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } else {
      // Handle registration failure (e.g., show an error message)
      setRegistrationSuccess(false);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      {registrationSuccess && (
        <div className="alert alert-success" role="alert">
          Registration successful! Welcome, {firstName} {lastName}. Your email is {email}.
        </div>
      )}
    </div>
  );
};

export default Registration;
