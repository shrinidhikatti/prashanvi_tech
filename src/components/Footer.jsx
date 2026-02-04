import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-bar"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">Prashanvi<span className="footer-logo-accent">Tech</span></span>
            <p className="footer-brand-desc">Crafting digital solutions that blend technical excellence with stunning design.</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-nav">
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Get In Touch</h4>
            <ul className="footer-nav">
              <li><span>prashanvitech@gmail.com</span></li>
              <li><span>+91 7760437800</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Follow Us</h4>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Prashanvi Tech. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1a2428;
          position: relative;
          padding-top: 4rem;
        }

        .footer-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #FF5722 25%, #FF8A65 50%, #FF5722 75%, transparent 100%);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.9fr 1fr 1.3fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Brand column */
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          display: block;
          margin-bottom: 0.8rem;
        }

        .footer-logo-accent {
          color: #FF5722;
        }

        .footer-brand-desc {
          color: rgba(255, 255, 255, 0.42);
          font-size: 0.9rem;
          line-height: 1.7;
          max-width: 280px;
        }

        /* Column headings */
        .footer-col-heading {
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.25rem;
        }

        /* Nav links */
        .footer-nav {
          list-style: none;
        }

        .footer-nav li {
          margin-bottom: 0.7rem;
        }

        .footer-nav a,
        .footer-nav span {
          color: rgba(255, 255, 255, 0.42);
          font-size: 0.9rem;
          transition: color 0.25s ease, padding-left 0.25s ease;
          display: inline-block;
        }

        .footer-nav a:hover {
          color: #FF5722;
          padding-left: 5px;
        }

        /* Social icons */
        .footer-socials {
          display: flex;
          gap: 0.7rem;
        }

        .footer-socials a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.48);
          transition: all 0.3s ease;
        }

        .footer-socials a:hover {
          background: rgba(255, 87, 34, 0.15);
          border-color: rgba(255, 87, 34, 0.3);
          color: #FF5722;
        }

        /* Bottom bar */
        .footer-bottom {
          padding: 1.75rem 0;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.28);
          font-size: 0.84rem;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-brand-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
