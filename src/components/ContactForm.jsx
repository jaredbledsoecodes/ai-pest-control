import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (!message.trim()) {
      newErrors.message = "Please tell us about your pest problem";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and show success message
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="contact fade-in">
        <h2>Request a Quote</h2>
        <div className="success-message">
          <h3>Thank you!</h3>
          <p>We’ve received your request and will contact you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact fade-in">
      <h2>Request a Quote</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <textarea
            placeholder="Tell us about your pest problem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </section>
  );
}
