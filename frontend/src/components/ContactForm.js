import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://portfolio-2w5o.onrender.com/contact', form);
      setStatus(res.data.message || 'Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // reset form
    } catch (err) {
      console.error(err);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactForm;
