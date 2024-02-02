import React, { useState } from 'react';
import '../index.css';

const AccountInfo = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editSuccess, setEditSuccess] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful edit (replace this with your actual edit logic)
    const simulatedEditSuccess = true;

    if (simulatedEditSuccess) {
      setEditSuccess(true);
    } else {
      // Handle edit failure (e.g., show an error message)
      setEditSuccess(false);
    }
  };

  return (
    <div className="account-info-container">
      <h2>Account Information Page</h2>
      <form onSubmit={handleEditSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
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
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>

      {editSuccess && (
        <div className="alert alert-success" role="alert">
          Edit successful! Changes saved for {fullName} with email: {email}  password {password}.
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
