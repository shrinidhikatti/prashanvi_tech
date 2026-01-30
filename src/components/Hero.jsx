import { ArrowRight, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Software Development Firm</span>
          <h1>
            Digitizing Your <br />
            <span className="text-primary">Vision</span> into Reality
          </h1>
          <p className="subtitle">
            We build premium digital products for ambitious brands.
            From robust web applications to stunning mobile experiences,
            Prashanvi Tech is your partner in innovation.
          </p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">
              Start a Project <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#portfolio" className="btn btn-light">
              View Our Work
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="visual-card main-card">
            <Code size={48} color="white" />
            <h3>Modern Tech</h3>
            <p>React, Next.js, Node</p>
          </div>
          <div className="visual-card float-card-1">
            <span>🚀 High Performance</span>
          </div>
          <div className="visual-card float-card-2">
            <span>🎨 Premium Design</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 4rem 0 5rem;
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: url('/d.jpeg') center/cover no-repeat;
        }

        .hero-container {
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .hero-content {
          flex: 1;
        }

        .badge {
          display: inline-block;
          background: #FFF1EC;
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 1.5rem;
        }

        .subtitle {
          font-size: 1.125rem;
          color: var(--text-light);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        .hero-visual {
          flex: 1;
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-card {
          background: white;
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          padding: 1.5rem;
        }

        .main-card {
          background: var(--primary);
          color: white;
          width: 250px;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: 2;
          transform: rotate(-5deg);
        }

        .main-card h3 { margin: 1rem 0 0.5rem; }
        .main-card p { opacity: 0.9; }

        .float-card-1 {
          position: absolute;
          top: 10%;
          right: 10%;
          z-index: 1;
          animation: float 6s ease-in-out infinite;
        }

        .float-card-2 {
          position: absolute;
          bottom: 10%;
          left: 10%;
          z-index: 3;
          animation: float 5s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-content {
            align-items: center;
            display: flex;
            flex-direction: column;
          }

          h1 { font-size: 2.5rem; }
          
          .hero-visual { width: 100%; margin-top: 2rem; }
        }
      `}</style>
    </section>
  );
}
