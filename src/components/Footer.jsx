export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="brand">
                        <span className="logo-text">Prashanvi<span className="text-primary">Tech</span></span>
                        <p>© 2024 Prashanvi Tech. All rights reserved.</p>
                    </div>

                    <div className="social-links">
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background-color: var(--white);
          padding: 2rem 0;
          border-top: 1px solid #f3f4f6;
          margin-top: 2rem;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--secondary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .brand p {
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: var(--text-light);
          font-weight: 500;
        }

        .social-links a:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
        </footer>
    );
}
