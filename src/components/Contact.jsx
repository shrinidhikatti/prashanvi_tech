import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

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
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">

          {/* Dark left panel */}
          <div className="contact-panel">
            <div className="cp-deco cp-deco-1"></div>
            <div className="cp-deco cp-deco-2"></div>
            <div className="cp-deco cp-deco-3"></div>

            <span className="cp-label">CONTACT US</span>
            <h2 className="cp-title">Let's Build<br/>Something Amazing<br/>Together</h2>
            <p className="cp-text">
              Have a project in mind? We'd love to hear from you.
              Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="cp-details">
              <div className="cp-detail-row">
                <div className="cp-detail-icon"><Mail size={18} /></div>
                <div>
                  <span className="cp-detail-label">Email</span>
                  <p className="cp-detail-value">prashanvitech@gmail.com</p>
                </div>
              </div>
              <div className="cp-detail-row">
                <div className="cp-detail-icon"><Phone size={18} /></div>
                <div>
                  <span className="cp-detail-label">Phone</span>
                  <p className="cp-detail-value">+91 7760437800</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="contact-form-panel">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="cf-title">Send a Message</h3>

              <div className="cf-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? 'cf-error' : ''}
                />
                {errors.name && <span className="cf-error-text">{errors.name}</span>}
              </div>

              <div className="cf-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'cf-error' : ''}
                />
                {errors.email && <span className="cf-error-text">{errors.email}</span>}
              </div>

              <div className="cf-group">
                <label>Mobile No</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="7760437800"
                  maxLength="10"
                  className={errors.mobile ? 'cf-error' : ''}
                />
                {errors.mobile && <span className="cf-error-text">{errors.mobile}</span>}
              </div>

              <div className="cf-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={errors.message ? 'cf-error' : ''}
                ></textarea>
                {errors.message && <span className="cf-error-text">{errors.message}</span>}
              </div>

              {submitStatus === 'success' && (
                <div className="cf-status cf-status-success">
                  ✓ Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="cf-status cf-status-error">
                  ✗ Failed to send message. Please try again or email us directly.
                </div>
              )}

              <button type="submit" className="cf-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 5rem 0;
          background: #f4f5f7;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.1);
        }

        /* ── Dark left panel ── */
        .contact-panel {
          background: linear-gradient(155deg, #263238 0%, #1a2428 100%);
          padding: 3.75rem 3rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cp-deco {
          position: absolute;
          border-radius: 50%;
          background: #FF5722;
          pointer-events: none;
        }

        .cp-deco-1 {
          width: 260px;
          height: 260px;
          opacity: 0.08;
          top: -90px;
          right: -90px;
        }

        .cp-deco-2 {
          width: 160px;
          height: 160px;
          opacity: 0.07;
          bottom: -65px;
          left: -50px;
          background: #FF8A65;
        }

        .cp-deco-3 {
          width: 70px;
          height: 70px;
          opacity: 0.05;
          bottom: 140px;
          right: 50px;
          background: #FF8A65;
        }

        .cp-label {
          font-size: 0.73rem;
          font-weight: 700;
          color: #FF5722;
          letter-spacing: 2.5px;
          position: relative;
          z-index: 1;
          margin-bottom: 1rem;
          display: block;
        }

        .cp-title {
          font-size: 2.35rem;
          font-weight: 800;
          line-height: 1.22;
          color: #ffffff;
          position: relative;
          z-index: 1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .cp-text {
          color: rgba(255,255,255,0.5);
          font-size: 0.95rem;
          line-height: 1.7;
          position: relative;
          z-index: 1;
          margin-bottom: 2.5rem;
        }

        .cp-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .cp-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .cp-detail-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 87, 34, 0.14);
          border: 1px solid rgba(255, 87, 34, 0.24);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF5722;
          flex-shrink: 0;
        }

        .cp-detail-label {
          display: block;
          font-size: 0.71rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: rgba(255,255,255,0.38);
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .cp-detail-value {
          color: rgba(255,255,255,0.82);
          font-size: 0.92rem;
          font-weight: 500;
        }

        /* ── Right form panel ── */
        .contact-form-panel {
          background: #ffffff;
          padding: 3.75rem 3.25rem;
          display: flex;
          align-items: center;
        }

        .contact-form {
          width: 100%;
        }

        .cf-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #263238;
          margin-bottom: 1.85rem;
        }

        .cf-group {
          margin-bottom: 1.2rem;
        }

        .cf-group label {
          display: block;
          margin-bottom: 0.38rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: #374151;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.78rem 1rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.92rem;
          color: #374151;
          background: #fafafa;
          transition: all 0.25s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #FF5722;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.1);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #9ca3af;
        }

        .contact-form input.cf-error,
        .contact-form textarea.cf-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .cf-error-text {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.22rem;
          display: block;
        }

        .cf-status {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          font-weight: 500;
          font-size: 0.88rem;
        }

        .cf-status-success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #6ee7b7;
        }

        .cf-status-error {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        .cf-submit {
          width: 100%;
          padding: 0.95rem;
          background: linear-gradient(135deg, #FF5722, #FF7043);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .cf-submit:hover {
          background: linear-gradient(135deg, #E64A19, #FF5722);
          box-shadow: 0 8px 24px rgba(255, 87, 34, 0.32);
          transform: translateY(-2px);
        }

        .cf-submit:active {
          transform: translateY(0);
        }

        .cf-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
          .contact-panel {
            padding: 2.75rem 2rem;
          }
          .contact-form-panel {
            padding: 2.75rem 2rem;
          }
          .cp-title {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
