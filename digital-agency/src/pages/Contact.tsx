import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle submission logic here (API call etc.)
    setSubmitted(true);
  };

  return (
    <div className="container section">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you for contacting us, {form.name}! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
