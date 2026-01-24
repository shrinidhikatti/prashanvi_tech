export function Contact() {
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
                            <p>hello@prashanvitech.com</p>
                        </div>
                        <div className="detail-item">
                            <strong>Phone:</strong>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form card" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="form-title">Send a Message</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="Tell us about your project..." required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
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
          transition: border-color 0.3s;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.1);
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
