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
      <div className="container hero-container">

        {/* Left Side: Minimal Apple-Style Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge-wrapper">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>v2.0 Now Available</span>
            </div>
          </div>

          <h1 className="hero-title">
            Digital Design <br />
            <span className="text-highlight">& Strategy</span>
          </h1>

          <p className="hero-description">
            We transform complex logic into
            <span className="text-orange"> elegant user experiences</span>.
            Prashanvi Tech bridges the gap between raw code and premium design.
          </p>

          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">
              Start Project
            </a>
            <a href="#services" className="btn btn-link">
              Explore Our Process <ArrowRight size={16} />
            </a>
          </div>

          <div className="tech-stack-mini">
            <span className="tech-label">Powered by</span>
            <div className="tech-icons">
              <Code2 size={16} />
              <Cpu size={16} />
              <Zap size={16} />
            </div>
          </div>
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
          background: #FFFFFF;
          overflow: hidden;
          padding: 4rem 0;
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

        /* ----- Left Side Styling ----- */
        .hero-content {
          text-align: left;
        }

        .badge-wrapper { margin-bottom: 2rem; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #F3F4F6;
          border-radius: 100px;
          color: #374151;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          background: #F97316; /* Orange */
          border-radius: 50%;
        }

        .hero-title {
          font-size: clamp(3.5rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        
        .text-highlight { color: #374151; }
        .text-orange { color: #F97316; font-weight: 600; }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #6B7280;
          max-width: 500px;
          margin-bottom: 3rem;
          font-weight: 400;
        }

        .cta-group {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .btn-primary {
          background: #111827;
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          transition: transform 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); }

        .btn-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #111827;
          font-weight: 600;
          text-decoration: none;
        }
        .btn-link:hover { text-decoration: underline; }

        .tech-stack-mini {
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0.6;
        }
        .tech-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; }
        .tech-icons { display: flex; gap: 0.5rem; }


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
          }
          .hero-content {
             text-align: center;
             display: flex;
             flex-direction: column;
             align-items: center;
          }
          .hero-engine { height: 400px; }
          .code-window, .ui-assembly { scale: 0.8; }
        }
      `}</style>
    </section>
  );
}
