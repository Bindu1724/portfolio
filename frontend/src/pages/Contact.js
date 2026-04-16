import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const contactCards = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'madishettibindu1706@gmail.com',
    href: 'mailto:madishettibindu1706@gmail.com',
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    value: '+91 9502651497',
    href: 'tel:+919502651497',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    value: 'Bindu Madishetti',
    href: 'https://www.linkedin.com/in/bindumadishetti/',
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-intro">
        <h2>Let's Talk!</h2>
        <p>
          Reach out by email, phone, or social profile — and send a message through the form.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-grid">
          {contactCards.map((item) => (
            <div className="contact-card" key={item.title}>
              <div className="contact-card-header">
                <div className="contact-card-icon">{item.icon}</div>
                <span className="contact-card-label">{item.title}</span>
              </div>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-card-value">
                {item.value}
              </a>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
