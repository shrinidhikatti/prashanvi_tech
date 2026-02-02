import { ArrowRight, BarChart3, Bell, CheckCircle, Code2, Cpu, Globe, Home, LayoutDashboard, Layers, PieChart, Search, Settings, User, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Hero() {
  const [phase, setPhase] = useState('coding'); // coding, assembling, complete

  // Simulation of code being typed
  const codeSnippet = `
const DigitalExperience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="premium-ui"
    >
      <Header />
      <Hero 
         strategy="Growth" 
         design="Pixel Perfect" 
      />
      <Dashboard />
    </motion.div>
  );
}`;

  const [displayedCode, setDisplayedCode] = useState('');

  useEffect(() => {
    if (phase === 'coding') {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedCode(codeSnippet.substring(0, i));
        i++;
        if (i > codeSnippet.length) {
          clearInterval(interval);
          setTimeout(() => setPhase('assembling'), 500);
        }
      }, 30); // Typing speed
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <section id="hero" className="hero-section">
      {/* New Dynamic Background */}
      <div className="hero-background">
        <div className="bg-gradient-mesh"></div>
        <div className="bg-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="container hero-container">

        {/* Left Side: Redesigned Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="eyebrow-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap size={14} strokeWidth={2.5} />
            <span>Powered by Innovation</span>
            <div className="tag-glow"></div>
          </motion.div>

          <h1 className="hero-title">
            <motion.span
              className="title-top"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where Code Meets
            </motion.span>
            <motion.span
              className="title-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Creativity
            </motion.span>
          </h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transforming complex algorithms into
            <span className="text-orange"> intuitive experiences</span>.
            We craft digital solutions that blend technical excellence with stunning design.
          </motion.p>

          <motion.div
            className="cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="#contact" className="btn btn-primary">
              <span>Start Your Project</span>
              <div className="btn-bg-shine"></div>
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a href="#services" className="btn btn-link">
              <span className="link-text">Explore Process</span>
              <ArrowRight size={16} className="link-arrow" />
            </a>
          </motion.div>

          <motion.div
            className="tech-stack-mini"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="stack-icons">
              <div className="icon-wrapper"><Code2 size={18} /></div>
              <div className="icon-wrapper"><Cpu size={18} /></div>
              <div className="icon-wrapper"><Zap size={18} /></div>
            </div>
            <div className="stack-text">
              <span className="stack-label">Built with</span>
              <span className="stack-desc">Cutting-edge technology</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Engine (Code -> Design) */}
        <div className="hero-engine">
          <AnimatePresence mode="wait">

            {/* Phase 1: The Code Editor */}
            {phase === 'coding' && (
              <motion.div
                key="code-editor"
                className="code-window"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
              >
                <div className="window-header">
                  <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <span className="filename">App.jsx</span>
                </div>
                <div className="code-content">
                  <pre>
                    <code>
                      {displayedCode}
                      <span className="cursor">|</span>
                    </code>
                  </pre>
                </div>
              </motion.div>
            )}

            {/* Phase 2: The Assembly (UI Elements) */}
            {(phase === 'assembling' || phase === 'complete') && (
              <motion.div
                key="ui-assembly"
                className="ui-assembly"
              >
                {/* Profile Card (Moved to Left) */}
                <motion.div
                  className="ui-card profile-card"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="profile-header">
                    <div className="profile-avatar">
                      <User size={20} />
                      <div className="status-dot"></div>
                    </div>
                    <div className="profile-info">
                      <div className="profile-name">Alex Morgan</div>
                      <div className="profile-role">Product Lead</div>
                    </div>
                  </div>
                  <div className="profile-badge">
                    <CheckCircle size={12} /> <span>Pro Member</span>
                  </div>
                </motion.div>

                {/* Dashboard Main Card (Top Right) */}
                <motion.div
                  className="ui-card dashboard-card"
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="card-header-glass">
                    <div className="card-title">Dashboard</div>
                    <div className="card-actions">
                      <Search size={14} />
                      <Bell size={14} />
                    </div>
                  </div>
                  <div className="dashboard-content">
                    <div className="stat-group">
                      <div className="stat-label">Total Revenue</div>
                      <div className="stat-value">$12,450.00</div>
                      <div className="stat-delta">+15.3%</div>
                    </div>

                    {/* SVG Line Chart */}
                    <div className="chart-area-svg">
                      <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Grid Lines */}
                        <line x1="0" y1="15" x2="300" y2="15" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="45" x2="300" y2="45" stroke="#f1f5f9" strokeWidth="1" />

                        {/* Area Fill */}
                        <path
                          d="M0,45 C40,40 60,30 100,30 C140,30 160,50 200,50 C240,50 260,10 300,10 V60 H0 Z"
                          fill="url(#chartGradient)"
                        />

                        {/* Line Stroke */}
                        <path
                          d="M0,45 C40,40 60,30 100,30 C140,30 160,50 200,50 C240,50 260,10 300,10"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Data Points */}
                        <circle cx="100" cy="30" r="4" fill="white" stroke="#F97316" strokeWidth="2" />
                        <circle cx="200" cy="50" r="4" fill="white" stroke="#F97316" strokeWidth="2" />
                        <circle cx="300" cy="10" r="4" fill="white" stroke="#F97316" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Small Chart Card (Bottom Right) */}
                <motion.div
                  className="ui-card small-chart-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="small-chart-header">
                    <div className="small-chart-label">Active Users</div>
                    <div className="small-chart-value">2.4k</div>
                  </div>
                  <div className="small-chart-svg">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      {/* Bar Graph Implementation */}
                      <rect x="5" y="20" width="10" height="20" rx="2" fill="#d1fae5" />
                      <rect x="25" y="10" width="10" height="30" rx="2" fill="#6ee7b7" />
                      <rect x="45" y="15" width="10" height="25" rx="2" fill="#34d399" />
                      <rect x="65" y="5" width="10" height="35" rx="2" fill="#10B981" />
                      <rect x="85" y="12" width="10" height="28" rx="2" fill="#059669" />
                    </svg>
                  </div>
                </motion.div>

                {/* Connection Lines (Decoration) */}
                <svg className="connection-lines">
                  <motion.path
                    d="M 120 180 L 180 180"
                    stroke="#F97316"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  />
                </svg>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #FAFAFA 0%, #FFFFFF 40%, #FFF7ED 100%);
          overflow: hidden;
          padding: 4rem 0;
        }

        /* New Background Styling */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .bg-gradient-mesh {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            radial-gradient(at 20% 30%, rgba(249, 115, 22, 0.08) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(251, 146, 60, 0.06) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(253, 186, 116, 0.04) 0px, transparent 50%);
          animation: mesh-shift 20s ease-in-out infinite;
        }

        @keyframes mesh-shift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .bg-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #F97316 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          animation: float-particle 20s ease-in-out infinite;
        }

        @keyframes float-particle {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) translateX(50px);
          }
        }

        .hero-container {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          max-width: 1280px;
          padding: 0 2rem;
        }

        /* ----- Redesigned Left Side Content ----- */
        .hero-content {
          text-align: left;
        }

        .eyebrow-tag {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          margin-bottom: 2.5rem;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.08));
          border: 1.5px solid rgba(249, 115, 22, 0.2);
          border-radius: 50px;
          color: #EA580C;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          overflow: hidden;
        }

        .eyebrow-tag svg {
          position: relative;
          z-index: 2;
          color: #F97316;
        }

        .tag-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.15), transparent 70%);
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .hero-title {
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          font-weight: 900;
          line-height: 1.05;
          color: #0F172A;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          display: flex;
          flex-direction: column;
        }

        .title-top {
          font-size: clamp(1.75rem, 3.5vw, 3rem);
          font-weight: 600;
          color: #475569;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }

        .title-main {
          background: linear-gradient(135deg, #F97316 0%, #EA580C 50%, #DC2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .title-main::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, #F97316, transparent);
          opacity: 0.2;
          border-radius: 4px;
        }

        .text-orange {
          color: #F97316;
          font-weight: 700;
          position: relative;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.75;
          color: #475569;
          max-width: 540px;
          margin-bottom: 3rem;
          font-weight: 400;
        }

        .cta-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: white;
          padding: 1.125rem 2.25rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            0 4px 14px rgba(15, 23, 42, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow:
            0 8px 24px rgba(15, 23, 42, 0.25),
            0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .btn-primary svg {
          transition: transform 0.3s;
        }

        .btn-primary:hover svg {
          transform: translateX(4px);
        }

        .btn-bg-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), transparent);
          transition: left 0.6s;
        }

        .btn-primary:hover .btn-bg-shine {
          left: 100%;
        }

        .btn-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #0F172A;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          padding: 1.125rem 1.5rem;
          border-radius: 14px;
          transition: all 0.3s;
          position: relative;
        }

        .btn-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.3), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .btn-link:hover::before {
          opacity: 1;
        }

        .btn-link:hover {
          color: #F97316;
          background: rgba(249, 115, 22, 0.05);
        }

        .link-arrow {
          transition: transform 0.3s;
        }

        .btn-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .tech-stack-mini {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(249, 115, 22, 0.04);
          border: 1px solid rgba(249, 115, 22, 0.1);
          border-radius: 16px;
          max-width: fit-content;
        }

        .stack-icons {
          display: flex;
          gap: 0.75rem;
        }

        .icon-wrapper {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 10px;
          color: #F97316;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.1);
          transition: all 0.3s;
        }

        .icon-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
        }

        .stack-text {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .stack-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stack-desc {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0F172A;
        }


        /* ----- Right Side (Animation Engine) ----- */
        .hero-engine {
          position: relative;
          height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .code-window {
          width: 100%;
          max-width: 500px;
          background: #1E1E1E;
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          font-family: 'Fira Code', monospace;
        }

        .window-header {
          background: #2D2D2D;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .dots { display: flex; gap: 6px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .red { background: #FF5F56; }
        .yellow { background: #FFBD2E; }
        .green { background: #27C93F; }
        .filename { color: #9CA3AF; font-size: 0.8rem; }

        .code-content {
          padding: 1.5rem;
          color: #D4D4D4;
          font-size: 0.9rem;
          height: 300px;
          overflow: hidden;
        }
        .cursor { display: inline-block; width: 2px; height: 1.2em; background: #F97316; animation: blink 1s infinite; vertical-align: bottom; }

        /* UI Assembly Styling */
        .ui-assembly {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .ui-card {
          position: absolute;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px -5px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.04);
          overflow: hidden;
        }

        /* Profile Card (Top Left - Staggered High) */
        .profile-card {
           top: 10%; /* Moved UP from 20% to avoid overlap */
           left: 0%;
           width: 260px;
           padding: 1.25rem;
           z-index: 4;
           display: flex;
           flex-direction: column;
           gap: 1rem;
        }

        .profile-header {
           display: flex;
           align-items: center;
           gap: 1rem;
        }
        .profile-avatar {
           width: 44px; height: 44px;
           background: #eff6ff;
           color: #3b82f6;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           position: relative;
        }
        .status-dot {
            position: absolute;
            bottom: -2px; right: -2px;
            width: 10px; height: 10px;
            background: #10b981;
            border: 2px solid white;
            border-radius: 50%;
        }
        .profile-name { font-weight: 600; font-size: 0.95rem; color: #1e293b; }
        .profile-role { font-size: 0.75rem; color: #64748b; }

        .profile-badge {
            background: #F2F2F2;
            padding: 0.5rem;
            border-radius: 8px;
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            gap: 6px;
            color: #475569;
            font-weight: 500;
        }

        /* Dashboard Main Content (Right Center - Staggered Low) */
        .dashboard-card {
           top: 35%; /* Moved DOWN from 15% to clear Profile card */
           right: 0%; 
           width: 340px;
           height: 240px;
           z-index: 2;
           background: linear-gradient(145deg, #ffffff, #f8fafc);
        }

        .card-header-glass {
            padding: 1rem;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .card-title { font-weight: 600; font-size: 0.9rem; color: #1e293b; }
        .card-actions { display: flex; gap: 8px; color: #94a3b8; }

        .dashboard-content { padding: 1.5rem; }
        .stat-group { margin-bottom: 1rem; }
        .stat-label { font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0.2rem 0; }
        .stat-delta { font-size: 0.8rem; color: #10b981; font-weight: 600; }

        .chart-area-svg {
            height: 80px;
            width: 100%;
            margin-top: 1rem;
            position: relative;
        }

        /* Small Chart Card (Bottom Right) */
        .small-chart-card {
            bottom: 5%;
            right: 15%;
            width: 180px;
            padding: 1rem;
            z-index: 3;
            background: white;
        }
        
        .small-chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        .small-chart-label { font-size: 0.75rem; color: #64748b; font-weight: 500; }
        .small-chart-value { font-size: 1rem; font-weight: 700; color: #111827; }
        .small-chart-svg { height: 40px; width: 100%; }

        .connection-lines {
           position: absolute;
           top: 0; left: 0; width: 100%; height: 100%;
           pointer-events: none;
           z-index: 1;
        }

        @keyframes blink { 50% { opacity: 0; } }

        @media (max-width: 1024px) {
          .hero-container {
             grid-template-columns: 1fr;
             text-align: center;
             gap: 4rem;
          }
          .hero-content {
             text-align: center;
             display: flex;
             flex-direction: column;
             align-items: center;
          }
          .hero-title {
             align-items: center;
          }
          .hero-description {
             text-align: center;
          }
          .cta-group {
             justify-content: center;
          }
          .hero-engine { height: 400px; }
          .code-window, .ui-assembly { scale: 0.8; }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 3rem 0;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .title-top {
            font-size: 1.25rem;
          }
          .cta-group {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }
          .btn-primary,
          .btn-link {
            width: 100%;
            justify-content: center;
          }
          .tech-stack-mini {
            flex-direction: column;
            text-align: center;
            width: 100%;
            gap: 1rem;
          }
          .stack-icons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
