import React, { useState } from 'react';
import './Contact.css'

const ContactForm = () => {
  // State variables to store input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Tracks if form if submitted

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the form data to your server or perform any desired action
    console.log('Form submitted:', { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // times out after 3 seconds - used for controlling thank you message
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <h3>Let us know what you think</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            rows="8" // Larger input box
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        {submitted && <p className="submitted-message">Message submitted, thanks <span role="img" aria-label="Heart">❤️</span></p>}
      </form>
    </div>
  );
};

export default ContactForm;