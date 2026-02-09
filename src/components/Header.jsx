import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Timeline', href: '#timeline' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer hexagon */}
              <path
                d="M25 2L45 14V36L25 48L5 36V14L25 2Z"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="hex-outer"
              />

              {/* Inner hexagon */}
              <path
                d="M25 8L40 17V33L25 42L10 33V17L25 8Z"
                fill="url(#gradient2)"
                className="hex-inner"
              />

              {/* P letter stylized as circuit */}
              <path
                d="M20 18V32 M20 18H26C28 18 29.5 19.5 29.5 21.5C29.5 23.5 28 25 26 25H20"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="letter-p"
              />
              {/* Circuit nodes */}
              {/* <circle cx="20" cy="18" r="2" fill="white" className="node node-1" />
              <circle cx="26" cy="18" r="2" fill="white" className="node node-2" />
              <circle cx="29.5" cy="21.5" r="2" fill="white" className="node node-3" />
              <circle cx="26" cy="25" r="2" fill="white" className="node node-4" />
              <circle cx="20" cy="25" r="2" fill="#FF5722" className="node node-5" />
              <circle cx="20" cy="32" r="2" fill="#FF5722" className="node node-6" /> */}


              {/* Connection lines (circuit traces) */}
              <path
                d="M15 25L5 25 M35 25L45 25 M25 5L25 0 M25 50L25 45"
                stroke="url(#gradient3)"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                className="circuit-trace"
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="5" y1="2" x2="45" y2="48">
                  <stop offset="0%" stopColor="#FF5722" />
                  <stop offset="50%" stopColor="#FF7043" />
                  <stop offset="100%" stopColor="#FF8A65" />
                </linearGradient>

                <linearGradient id="gradient2" x1="10" y1="8" x2="40" y2="42">
                  <stop offset="0%" stopColor="#FF5722" />
                  <stop offset="100%" stopColor="#E64A19" />
                </linearGradient>

                <linearGradient id="gradient3" x1="0" y1="0" x2="50" y2="50">
                  <stop offset="0%" stopColor="#FF5722" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF8A65" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span>Prashanvi<span className="text-primary">Tech</span></span>
        </div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: .5rem 0;
          transition: all 0.3s ease;
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: .4rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.02);
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .logo-icon svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 2px 8px rgba(255, 87, 34, 0.3));
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .logo:hover .logo-icon svg {
          filter: drop-shadow(0 4px 16px rgba(255, 87, 34, 0.5));
          transform: rotate(360deg);
        }

        /* Hexagon animations */
        .hex-outer {
          animation: hexPulse 3s ease-in-out infinite;
        }

        .hex-inner {
          animation: hexGlow 2s ease-in-out infinite alternate;
        }

        @keyframes hexPulse {
          0%, 100% {
            stroke-dasharray: 0 300;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 150 150;
            stroke-dashoffset: -150;
          }
        }

        @keyframes hexGlow {
          from {
            opacity: 0.8;
          }
          to {
            opacity: 1;
          }
        }

        /* Letter P animation */
        .letter-p {
          animation: letterDraw 2s ease-in-out infinite;
        }

        @keyframes letterDraw {
          0%, 100% {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
        }

        /* Circuit nodes pulse */
        .node {
          animation: nodePulse 2s ease-in-out infinite;
        }

        .node-1 { animation-delay: 0s; }
        .node-2 { animation-delay: 0.2s; }
        .node-3 { animation-delay: 0.4s; }
        .node-4 { animation-delay: 0.6s; }
        .node-5 { animation-delay: 0.8s; }
        .node-6 { animation-delay: 1s; }

        @keyframes nodePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }

        /* Circuit traces animation */
        .circuit-trace {
          animation: tracePulse 3s linear infinite;
        }

        @keyframes tracePulse {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -20;
          }
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          color: var(--secondary);
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--white);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-top: 1px solid #f3f4f6;
        }

        .mobile-nav-link {
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }

          .logo {
            font-size: 1.25rem;
            gap: 0.5rem;
          }

          .logo-icon {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            font-size: 1.125rem;
          }

          .logo-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </header>
  );
}
