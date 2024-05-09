import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send feedback to server)
    console.log('Feedback submitted:', {
      feedback,
      lastName,
      firstName,
      email
    });
    // Reset the form
    setFeedback('');
    setLastName('');
    setFirstName('');
    setEmail('');
  };

  const handleChangeFeedback = (e) => {
    setFeedback(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5em' }}>Feedback Form</h1>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <label style={{ color: 'white', display: 'block', marginBottom: '10px' }}>
            Last Name:
            <br />
            <input type="text" value={lastName} onChange={handleChangeLastName} style={{ marginBottom: '10px' }} />
          </label>
          <label style={{ color: 'white', display: 'block', marginBottom: '10px' }}>
            First Name:
            <br />
            <input type="text" value={firstName} onChange={handleChangeFirstName} style={{ marginBottom: '10px' }} />
          </label>
          <label style={{ color: 'white', display: 'block', marginBottom: '10px' }}>
            Email:
            <br />
            <input type="email" value={email} onChange={handleChangeEmail} style={{ marginBottom: '10px' }} />
          </label>
          <label style={{ color: 'white', display: 'block', marginBottom: '20px' }}>
            Feedback:
            <br />
            <textarea value={feedback} onChange={handleChangeFeedback} style={{ width: '100%', minHeight: '150px' }} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Go Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
