import { useState } from 'react';
import vishwaengImg from '../assets/vishwaeng.jpeg';
import sagarImg from '../assets/sagar2.jpeg';
import preraneImg from '../assets/prerane2.jpeg';
import horoscopeImg from '../assets/horoscope.jpeg';
import shaktiImg from '../assets/shakti.jpeg';
import quickImg from '../assets/quick.png';
import cakeImg from '../assets/mrcake4.png';
import homaImg from '../assets/homa.png';



export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'ERP Enterprise Resource Planning',
      category: 'Enterprise Solution',
      match: 'Enterspice',
      description: 'Comprehensive resource management system for large-scale operations.',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5D6C 100%)',
      url: 'https://vishwaengineers.com/',
      image: vishwaengImg,
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'Recharts'],
        backend: ['Node.js', 'Express', 'PostgreSQL (Neon)', 'TypeScript'],
        language: ['TypeScript', 'JavaScript'],
        frameworks: ['React Router DOM', 'TanStack React Query', 'Axios'],
        stateManagement: ['React Query', 'Context API'],
        other: ['JWT Auth', 'bcryptjs', 'PDFKit', 'ExcelJS', 'Nodemailer', 'Vercel', 'Multer']
      }
    },
    {
      title: 'Trade with Sagar',
      category: 'FinTech',
      match: 'Trading Tips',
      description: 'Real-time stock analysis and trading tips platform.',
      gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
      url: 'https://tradewithsagar.com/',
      image: sagarImg,
      techStack: {
        frontend: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'React Calendar'],
        backend: ['Next.js API Routes', 'Prisma ORM', 'PostgreSQL', 'Node-cron'],
        language: ['TypeScript', 'JavaScript'],
        frameworks: ['Next.js', 'Prisma', 'Jose (JWT)', 'bcryptjs'],
        stateManagement: ['React Hooks', 'useState/useEffect'],
        other: ['Yahoo Finance API', 'Resend Email', 'Axios', 'Vercel', 'date-fns']
      }
    },
    {
      title: 'Prerane Software',
      category: 'EdTech',
      match: 'Education',
      description: 'Educational platform designed to enhance learning experiences.',
      gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
      url: 'https://prerane.in/',
      image: preraneImg,
      techStack: {
        frontend: ['Tailwind CSS', 'Font Awesome 6.0', 'Django Templates', 'Vanilla JavaScript'],
        backend: ['Django 4.2+', 'Python 3.x', 'PostgreSQL 14 (Google Cloud SQL)', 'SQLite3'],
        language: ['Python'],
        frameworks: ['Django', 'WhiteNoise', 'openpyxl', 'pandas'],
        stateManagement: ['Django Session Management'],
        other: ['Google Cloud Platform', 'Excel Export', 'Role-Based Access Control', 'Multi-Role System']
      }
    },
    {
      title: 'Horoscopebook',
      category: 'Lifestyle',
      match: 'Astrology',
      description: 'Personalized horoscope and astrology insights application.',
      gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
      url: 'https://astrovastushrivmjoshi.com/horoscopebook/',
      image: horoscopeImg,
      techStack: {
        frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Font Awesome', 'Google Fonts'],
        backend: ['Node.js', 'Express.js', 'PostgreSQL (Neon)'],
        language: ['JavaScript'],
        frameworks: ['Express.js', 'Multer', 'Nodemailer'],
        paymentGateways: ['Razorpay'],
        other: ['Shiprocket API', 'Google Sheets API', 'EmailJS', 'Render.com', 'Hostinger', 'Helmet', 'CORS']
      }
    },
    {
      title: 'Shakti Kit',
      category: 'E-Commerce',
      match: 'Product',
      description: 'Direct-to-consumer product kit with seamless purchasing flow.',
      gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
      url: 'https://astrovastushrivmjoshi.com/shaktikit/',
      image: shaktiImg,
      techStack: {
        frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'React Player'],
        backend: ['Netlify Serverless Functions', 'Node.js', 'esbuild'],
        language: ['TypeScript', 'JavaScript'],
        frameworks: ['React', 'Axios'],
        stateManagement: ['React Hooks'],
        paymentGateways: ['Razorpay'],
        other: ['Shiprocket API', 'Google Tag Manager', 'Meta Pixel', 'Hostinger', 'Netlify']
      }
    },
    {
      title: 'Quickvenue.in',
      category: 'Booking System',
      match: 'Hall Booking',
      description: 'Venue booking platform for events, weddings, and parties.',
      gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
      url: 'https://www.quickvenue.in/',
      image: quickImg,
      techStack: {
        frontend: ['React 19', 'React Router DOM', 'Tailwind CSS', 'Lucide React', 'Recharts', 'Google Maps API'],
        backend: ['Django 5.0', 'Django REST Framework', 'Python 3.13', 'Gunicorn', 'PostgreSQL (Neon)'],
        language: ['Python', 'JavaScript', 'TypeScript'],
        frameworks: ['Django', 'WhiteNoise', 'django-cors-headers'],
        stateManagement: ['React Hooks'],
        other: ['JWT Auth (simplejwt)', 'Vercel', 'Render.com', 'jsPDF', 'xlsx', 'Axios', 'date-fns']
      }
    },
    {
      title: 'Homa Booking',
      category: 'Spiritual Services',
      match: 'Ritual Booking',
      description: 'Online platform for booking Hindu religious ceremonies and rituals.',
      gradient: 'linear-gradient(135deg, #FF9A56 0%, #FF6B6B 100%)',
      url: '#',
      image: homaImg,
      techStack: {
        frontend: ['React 18', 'Material-UI v5', 'React Big Calendar', 'date-fns', '@mui/icons-material'],
        backend: ['Firebase 10.1', 'Cloud Firestore', 'Firebase Authentication', 'Firebase Hosting'],
        language: ['JavaScript'],
        frameworks: ['React Router DOM', 'Emotion (styled)'],
        stateManagement: ['React Hooks', 'LocalStorage'],
        paymentGateways: ['Razorpay'],
        other: ['Recharts', 'jsPDF', 'xlsx', 'WhatsApp Integration', 'Panchanga Service', 'Role-Based Access']
      }
    },
    {
      title: 'MrCake Bakers',
      category: 'E-Commerce',
      match: 'Bakery',
      description: 'Custom cake ordering platform with design customization and delivery tracking.',
      gradient: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
      url: '#',
      image: cakeImg,
      techStack: {
        frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Leaflet'],
        backend: ['Next.js API Routes', 'NextAuth.js 5', 'Prisma 6', 'CockroachDB (PostgreSQL)', 'Node.js'],
        language: ['TypeScript'],
        frameworks: ['Next.js', 'Prisma ORM', 'Zod', 'React Leaflet'],
        stateManagement: ['Zustand', 'React Context'],
        paymentGateways: ['Razorpay', 'PayPal'],
        other: ['Recharts', 'Next-PWA', 'bcryptjs', 'Sharp', 'Vercel-ready', 'GPS Tracking', 'Role-Based Auth']
      }
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="header-group">
          <div>
            <span className="text-primary font-bold tracking-wider">OUR WORK</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">A showcase of our recent technical achievements and digital solutions.</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="image-overlay"></div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-actions">
                  <button
                    className="btn-tech-stack"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project);
                    }}
                  >
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Tech Stack
                  </button>

                  {project.url === '#' ? (
                    <button
                      className="btn-visit"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('🚧 Project Under Development\n\nThis project is currently in testing phase and deployment is pending. Stay tuned for the live launch!');
                      }}
                    >
                      Visit Site
                      <svg className="btn-icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-visit"
                    >
                      Visit Site
                      <svg className="btn-icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-category">{selectedProject.category}</div>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-subtitle">Technical Architecture</p>
            </div>

            <div className="tech-grid">
              {selectedProject.techStack.frontend && (
                <div className="tech-section">
                  <div className="tech-label">Frontend</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.frontend.map((tech, i) => (
                      <span key={i} className="tech-tag frontend">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.techStack.backend && (
                <div className="tech-section">
                  <div className="tech-label">Backend</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.backend.map((tech, i) => (
                      <span key={i} className="tech-tag backend">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.techStack.language && (
                <div className="tech-section">
                  <div className="tech-label">Languages</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.language.map((tech, i) => (
                      <span key={i} className="tech-tag language">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.techStack.frameworks && (
                <div className="tech-section">
                  <div className="tech-label">Frameworks & Libraries</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.frameworks.map((tech, i) => (
                      <span key={i} className="tech-tag frameworks">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.techStack.stateManagement && (
                <div className="tech-section">
                  <div className="tech-label">State Management</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.stateManagement.map((tech, i) => (
                      <span key={i} className="tech-tag state">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.techStack.paymentGateways && (
                <div className="tech-section">
                  <div className="tech-label">Payment Gateways</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.paymentGateways.map((tech, i) => (
                      <span key={i} className="tech-tag payment">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.techStack.other && (
                <div className="tech-section">
                  <div className="tech-label">Additional Technologies</div>
                  <div className="tech-tags">
                    {selectedProject.techStack.other.map((tech, i) => (
                      <span key={i} className="tech-tag other">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .section {
          padding: 6rem 0;
          background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
          position: relative;
        }

        .section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e0e0e0 50%, transparent);
        }

        .header-group {
          margin-bottom: 5rem;
          text-align: center;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-size: 3rem;
          color: #1a1a1a;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          padding: 0 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 1px 3px rgba(0,0,0,0.06),
            0 10px 30px rgba(0,0,0,0.04);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.06);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 4px 12px rgba(0,0,0,0.08),
            0 20px 50px rgba(0,0,0,0.12);
          border-color: rgba(0,0,0,0.08);
        }

        .project-preview {
          height: 280px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          image-rendering: auto;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .project-card:hover .project-image {
          transform: scale(1.08);
          filter: brightness(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 50%,
            rgba(0,0,0,0.02) 100%
          );
          pointer-events: none;
        }

        .project-info {
          padding: 2rem 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
        }

        .project-header {
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }

        .project-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #6366f1;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          display: inline-block;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .btn-tech-stack,
        .btn-visit {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          text-decoration: none;
        }

        .btn-tech-stack {
          background: #0a0a0a;
          color: white;
          border: 2px solid #0a0a0a;
        }

        .btn-tech-stack:hover {
          background: #2a2a2a;
          border-color: #2a2a2a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .btn-visit {
          background: white;
          color: #0a0a0a;
          border: 2px solid #e0e0e0;
        }

        .btn-visit:hover {
          background: #fafafa;
          border-color: #0a0a0a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .btn-icon,
        .btn-icon-arrow {
          width: 16px;
          height: 16px;
          stroke-width: 2.5;
          transition: transform 0.3s ease;
        }

        .btn-tech-stack:hover .btn-icon {
          transform: scale(1.1);
        }

        .btn-visit:hover .btn-icon-arrow {
          transform: translateX(4px);
        }

        /* Modal Styles - Futuristic Dark Theme */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0.95) 70%);
          backdrop-filter: blur(20px) saturate(180%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          animation: modalOverlayFade 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalOverlayFade {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(20px) saturate(180%);
          }
        }

        .modal-content {
          background: linear-gradient(135deg,
            rgba(15, 15, 25, 0.98) 0%,
            rgba(25, 25, 40, 0.96) 50%,
            rgba(15, 15, 25, 0.98) 100%
          );
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 32px;
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          animation: modalContentReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 0 0 1px rgba(99, 102, 241, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.6),
            0 32px 64px rgba(99, 102, 241, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .modal-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .modal-content::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 1px;
          background: linear-gradient(135deg,
            rgba(99, 102, 241, 0.3) 0%,
            transparent 40%,
            transparent 60%,
            rgba(139, 92, 246, 0.2) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.6;
        }

        @keyframes modalContentReveal {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.92) rotateX(10deg);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0px);
          }
        }

        .modal-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.5);
          transform: rotate(90deg) scale(1.1);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }

        .modal-close svg {
          width: 20px;
          height: 20px;
          stroke: rgba(255, 255, 255, 0.9);
          stroke-width: 2;
          transition: stroke 0.3s ease;
        }

        .modal-close:hover svg {
          stroke: rgba(239, 68, 68, 1);
        }

        .modal-header {
          padding: 3.5rem 3.5rem 2.5rem;
          border-bottom: 1px solid rgba(99, 102, 241, 0.15);
          background: linear-gradient(to bottom,
            rgba(99, 102, 241, 0.05) 0%,
            transparent 100%
          );
          position: relative;
          z-index: 1;
        }

        .modal-category {
          font-size: 0.6875rem;
          text-transform: uppercase;
          color: rgba(139, 92, 246, 1);
          font-weight: 800;
          letter-spacing: 2px;
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 50px;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .modal-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          to {
            left: 100%;
          }
        }

        .modal-title {
          font-size: 2.75rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0.75rem 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
          position: relative;
        }

        .modal-subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .tech-grid {
          padding: 2.5rem 3.5rem 3.5rem;
          display: grid;
          gap: 2.5rem;
          position: relative;
          z-index: 1;
          max-height: calc(90vh - 200px);
          overflow-y: auto;
        }

        .tech-grid::-webkit-scrollbar {
          width: 8px;
        }

        .tech-grid::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }

        .tech-grid::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3);
          border-radius: 10px;
        }

        .tech-grid::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.5);
        }

        .tech-section {
          animation: techSectionReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          position: relative;
        }

        .tech-section::before {
          content: '';
          position: absolute;
          left: -1rem;
          top: 0;
          width: 3px;
          height: 0;
          background: linear-gradient(to bottom, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.4));
          border-radius: 10px;
          animation: lineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .tech-section:nth-child(1) { animation-delay: 0.1s; }
        .tech-section:nth-child(1)::before { animation-delay: 0.1s; }
        .tech-section:nth-child(2) { animation-delay: 0.15s; }
        .tech-section:nth-child(2)::before { animation-delay: 0.15s; }
        .tech-section:nth-child(3) { animation-delay: 0.2s; }
        .tech-section:nth-child(3)::before { animation-delay: 0.2s; }
        .tech-section:nth-child(4) { animation-delay: 0.25s; }
        .tech-section:nth-child(4)::before { animation-delay: 0.25s; }
        .tech-section:nth-child(5) { animation-delay: 0.3s; }
        .tech-section:nth-child(5)::before { animation-delay: 0.3s; }
        .tech-section:nth-child(6) { animation-delay: 0.35s; }
        .tech-section:nth-child(6)::before { animation-delay: 0.35s; }
        .tech-section:nth-child(7) { animation-delay: 0.4s; }
        .tech-section:nth-child(7)::before { animation-delay: 0.4s; }

        @keyframes techSectionReveal {
          from {
            opacity: 0;
            transform: translateX(-30px) translateY(20px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes lineGrow {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: 100%;
            opacity: 1;
          }
        }

        .tech-label {
          font-size: 0.75rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 2.5px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tech-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(99, 102, 241, 0.3), transparent);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 0.75rem 1.375rem;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          letter-spacing: 0.3px;
        }

        .tech-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .tech-tag:hover {
          transform: translateY(-4px) scale(1.05);
          filter: brightness(1.2);
        }

        .tech-tag:hover::before {
          left: 100%;
        }

        .tech-tag.frontend {
          background: rgba(59, 130, 246, 0.15);
          color: rgba(147, 197, 253, 1);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .tech-tag.frontend:hover {
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3),
                      0 0 40px rgba(59, 130, 246, 0.2);
        }

        .tech-tag.backend {
          background: rgba(16, 185, 129, 0.15);
          color: rgba(110, 231, 183, 1);
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15);
        }

        .tech-tag.backend:hover {
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.3),
                      0 0 40px rgba(16, 185, 129, 0.2);
        }

        .tech-tag.language {
          background: rgba(251, 191, 36, 0.15);
          color: rgba(253, 224, 71, 1);
          border-color: rgba(251, 191, 36, 0.4);
          box-shadow: 0 4px 20px rgba(251, 191, 36, 0.15);
        }

        .tech-tag.language:hover {
          box-shadow: 0 8px 30px rgba(251, 191, 36, 0.3),
                      0 0 40px rgba(251, 191, 36, 0.2);
        }

        .tech-tag.frameworks {
          background: rgba(168, 85, 247, 0.15);
          color: rgba(216, 180, 254, 1);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.15);
        }

        .tech-tag.frameworks:hover {
          box-shadow: 0 8px 30px rgba(168, 85, 247, 0.3),
                      0 0 40px rgba(168, 85, 247, 0.2);
        }

        .tech-tag.state {
          background: rgba(239, 68, 68, 0.15);
          color: rgba(252, 165, 165, 1);
          border-color: rgba(239, 68, 68, 0.4);
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.15);
        }

        .tech-tag.state:hover {
          box-shadow: 0 8px 30px rgba(239, 68, 68, 0.3),
                      0 0 40px rgba(239, 68, 68, 0.2);
        }

        .tech-tag.payment {
          background: rgba(34, 197, 94, 0.15);
          color: rgba(134, 239, 172, 1);
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 0 4px 20px rgba(34, 197, 94, 0.15);
        }

        .tech-tag.payment:hover {
          box-shadow: 0 8px 30px rgba(34, 197, 94, 0.3),
                      0 0 40px rgba(34, 197, 94, 0.2);
        }

        .tech-tag.other {
          background: rgba(148, 163, 184, 0.15);
          color: rgba(203, 213, 225, 1);
          border-color: rgba(148, 163, 184, 0.4);
          box-shadow: 0 4px 20px rgba(148, 163, 184, 0.15);
        }

        .tech-tag.other:hover {
          box-shadow: 0 8px 30px rgba(148, 163, 184, 0.3),
                      0 0 40px rgba(148, 163, 184, 0.2);
        }

        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2.75rem;
          }

          .project-preview {
            height: 240px;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-content {
            border-radius: 24px;
            max-height: 95vh;
          }

          .modal-close {
            top: 1.25rem;
            right: 1.25rem;
            width: 44px;
            height: 44px;
          }

          .modal-header {
            padding: 3rem 2rem 2rem;
          }

          .modal-title {
            font-size: 2rem;
          }

          .tech-grid {
            padding: 2rem 2rem 2.5rem;
            gap: 2rem;
          }

          .tech-label {
            font-size: 0.6875rem;
            letter-spacing: 2px;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.625rem 1.125rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .btn-tech-stack,
          .btn-visit {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.25rem;
          }

          .project-title {
            font-size: 1.5rem;
          }

          .modal-overlay {
            padding: 0.5rem;
          }

          .modal-content {
            border-radius: 20px;
          }

          .modal-close {
            top: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
          }

          .modal-header {
            padding: 2.5rem 1.5rem 1.5rem;
          }

          .modal-title {
            font-size: 1.875rem;
          }

          .modal-subtitle {
            font-size: 0.9375rem;
          }

          .tech-grid {
            padding: 1.5rem 1.5rem 2rem;
            gap: 1.75rem;
          }

          .tech-section::before {
            left: -0.5rem;
          }

          .tech-tags {
            gap: 0.5rem;
          }

          .tech-tag {
            font-size: 0.6875rem;
            padding: 0.5rem 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}
