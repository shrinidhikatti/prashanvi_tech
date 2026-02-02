import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile validation
    const mobileRegex = /^\d{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Message validation
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus('success');
          // Reset form
          setFormData({
            name: '',
            email: '',
            mobile: '',
            message: ''
          });
        } else {
          setSubmitStatus('error');
          console.error('Error:', data.message);
        }
      } catch (error) {
        setSubmitStatus('error');
        console.error('Error sending email:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="text-primary font-bold">CONTACT US</span>
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p className="contact-text">
            Have a project in mind? We'd love to hear from you.
            Send us a message and we'll get back to you within 24 hours.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <strong>Email:</strong>
              <p>prashanvitech@gmail.com</p>
            </div>
            <div className="detail-item">
              <strong>Phone:</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit} noValidate>
          <h3 className="form-title">Send a Message</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* New Mobile Field */}
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="9876543210"
              maxLength="10"
              className={errors.mobile ? 'error' : ''}
            />
            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          {submitStatus === 'success' && (
            <div className="status-message success-message">
              ✓ Message sent successfully! We'll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error-message">
              ✗ Failed to send message. Please try again or email us directly.
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--secondary);
          margin: 1rem 0;
          font-weight: 800;
        }

        .contact-text {
          color: var(--text-light);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-item strong {
          display: block;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }
        
        .detail-item p {
          color: var(--text);
        }

        .contact-form {
          padding: 3rem;
        }

        .form-title {
          margin-bottom: 2rem;
          color: var(--secondary);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text);
        }

        input, textarea {
          width: 100%;
          padding: 0.875rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-family: inherit;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.1);
        }

        /* Validation Styles */
        input.error, textarea.error {
          border-color: #ef4444;
        }
        
        .error-text {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          display: block;
        }

        .status-message {
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .success-message {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #6ee7b7;
        }

        .error-message {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .w-full { width: 100%; }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
