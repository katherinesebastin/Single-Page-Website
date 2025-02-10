import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Name cannot be empty.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email address.';
    if (message.length < 10) newErrors.message = 'Message must be at least 10 characters long.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header id="home">
        <h1>Welcome to My React Page</h1>
      </header>
      <main>
        <section id="about">
          <h2>About This Page</h2>
          <p>This page is a basic HTML template converted into a React Vite application.</p>
        </section>
        <section id="contact">
          <h2>Contact Information</h2>
          <p>If you have any questions, feel free to reach out!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <small className="error">{errors.name}</small>}
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>
            <div>
              <label>Message:</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
              {errors.message && <small className="error">{errors.message}</small>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
