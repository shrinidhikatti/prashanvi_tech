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
                {/* Ambient Particles */}
                <div className="assembly-particles">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="assembly-particle"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                        x: [0, (i % 2 === 0 ? 20 : -20)],
                        y: [0, (i % 3 === 0 ? -30 : 30)]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${20 + (i * 12)}%`,
                        top: `${30 + ((i % 3) * 15)}%`
                      }}
                    />
                  ))}
                </div>

                {/* Profile Card (Moved to Left) */}
                <motion.div
                  className="ui-card profile-card"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="card-glow"></div>
                  <div className="profile-header">
                    <div className="profile-avatar">
                      <User size={20} />
                      <div className="status-dot">
                        <div className="status-ping"></div>
                      </div>
                    </div>
                    <div className="profile-info">
                      <div className="profile-name">Alex Morgan</div>
                      <div className="profile-role">Product Lead</div>
                    </div>
                  </div>
                  <div className="profile-badge">
                    <CheckCircle size={12} /> <span>Pro Member</span>
                  </div>
                  <div className="profile-stats">
                    <div className="profile-stat">
                      <div className="stat-num">127</div>
                      <div className="stat-lbl">Projects</div>
                    </div>
                    <div className="profile-stat">
                      <div className="stat-num">4.9</div>
                      <div className="stat-lbl">Rating</div>
                    </div>
                  </div>
                </motion.div>

                {/* Dashboard Main Card (Top Right) */}
                <motion.div
                  className="ui-card dashboard-card"
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="card-glow"></div>
                  <div className="card-header-glass">
                    <div className="card-title">
                      <BarChart3 size={16} className="header-icon" />
                      Dashboard
                    </div>
                    <div className="card-actions">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="action-btn"
                      >
                        <Search size={14} />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="action-btn"
                      >
                        <Bell size={14} />
                        <div className="notification-dot"></div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="dashboard-content">
                    <div className="stat-group">
                      <div className="stat-label">Total Revenue</div>
                      <div className="stat-value">$12,450.00</div>
                      <div className="stat-delta">
                        <motion.span
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                        >
                          +15.3%
                        </motion.span>
                      </div>
                    </div>

                    {/* SVG Line Chart */}
                    <div className="chart-area-svg">
                      <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>

                        {/* Grid Lines */}
                        <line x1="0" y1="15" x2="300" y2="15" stroke="#f1f5f9" strokeWidth="1" opacity="0.5" />
                        <line x1="0" y1="45" x2="300" y2="45" stroke="#f1f5f9" strokeWidth="1" opacity="0.5" />

                        {/* Area Fill */}
                        <motion.path
                          d="M0,45 C40,40 60,30 100,30 C140,30 160,50 200,50 C240,50 260,10 300,10 V60 H0 Z"
                          fill="url(#chartGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                        />

                        {/* Line Stroke */}
                        <motion.path
                          d="M0,45 C40,40 60,30 100,30 C140,30 160,50 200,50 C240,50 260,10 300,10"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#glow)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                        />

                        {/* Animated Data Points */}
                        <motion.circle
                          cx="100" cy="30" r="4"
                          fill="white"
                          stroke="#F97316"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        />
                        <motion.circle
                          cx="200" cy="50" r="4"
                          fill="white"
                          stroke="#F97316"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ duration: 0.5, delay: 1.7 }}
                        />
                        <motion.circle
                          cx="300" cy="10" r="4"
                          fill="white"
                          stroke="#F97316"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ duration: 0.5, delay: 1.9 }}
                        />

                        {/* Pulsing rings on data points */}
                        <motion.circle
                          cx="300" cy="10" r="8"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="2"
                          animate={{
                            r: [8, 16],
                            opacity: [0.6, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 2
                          }}
                        />
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
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="card-glow"></div>
                  <div className="small-chart-header">
                    <div className="small-chart-label">Active Users</div>
                    <div className="small-chart-value">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        2.4k
                      </motion.span>
                      <motion.span
                        className="trend-up"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 }}
                      >
                        ↗
                      </motion.span>
                    </div>
                  </div>
                  <div className="small-chart-svg">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      {/* Animated Bar Graph */}
                      {[
                        { x: 5, y: 20, height: 20, delay: 1.6, color: '#fcd9bd' },
                        { x: 25, y: 10, height: 30, delay: 1.7, color: '#fb923c' },
                        { x: 45, y: 15, height: 25, delay: 1.8, color: '#f97316' },
                        { x: 65, y: 5, height: 35, delay: 1.9, color: '#ea580c' },
                        { x: 85, y: 12, height: 28, delay: 2.0, color: '#c2410c' }
                      ].map((bar, i) => (
                        <motion.rect
                          key={i}
                          x={bar.x}
                          y={bar.y}
                          width="10"
                          height={bar.height}
                          rx="2"
                          fill={bar.color}
                          initial={{ scaleY: 0, originY: 1 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.6, delay: bar.delay, ease: "easeOut" }}
                        />
                      ))}
                    </svg>
                  </div>
                </motion.div>

                {/* Enhanced Connection Lines */}
                <svg className="connection-lines">
                  {/* Profile to Dashboard */}
                  <motion.path
                    d="M 140 120 Q 180 120 200 150"
                    stroke="url(#lineGradient1)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />

                  {/* Dashboard to Small Chart */}
                  <motion.path
                    d="M 280 280 L 320 340"
                    stroke="url(#lineGradient2)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />

                  {/* Gradients for lines */}
                  <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Animated dots traveling along lines */}
                  <motion.circle
                    r="3"
                    fill="#F97316"
                    initial={{ offsetDistance: '0%', opacity: 0 }}
                    animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                      <mpath href="#motionPath1" />
                    </animateMotion>
                  </motion.circle>

                  <path id="motionPath1" d="M 140 120 Q 180 120 200 150" fill="none" />
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

        /* Ambient Particles */
        .assembly-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .assembly-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #F97316 0%, transparent 70%);
          border-radius: 50%;
        }

        .ui-card {
          position: absolute;
          background: white;
          border-radius: 20px;
          box-shadow:
            0 20px 60px -15px rgba(0,0,0,0.15),
            0 0 1px rgba(0,0,0,0.1);
          border: 1px solid rgba(249, 115, 22, 0.08);
          overflow: visible;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ui-card:hover {
          box-shadow:
            0 25px 70px -15px rgba(249, 115, 22, 0.25),
            0 0 0 1px rgba(249, 115, 22, 0.1);
        }

        /* Card Glow Effect */
        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.15), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
          z-index: 0;
        }

        .ui-card:hover .card-glow {
          opacity: 1;
        }

        /* Profile Card (Top Left - Staggered High) */
        .profile-card {
           top: 8%;
           left: -5%;
           width: 240px;
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
            z-index: 2;
        }

        .status-ping {
          position: absolute;
          bottom: -2px; right: -2px;
          width: 10px; height: 10px;
          background: #10b981;
          border-radius: 50%;
          animation: ping-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          z-index: 1;
        }

        @keyframes ping-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .profile-name { font-weight: 600; font-size: 0.95rem; color: #1e293b; }
        .profile-role { font-size: 0.75rem; color: #64748b; }

        .profile-badge {
            background: linear-gradient(135deg, #F2F2F2, #FAFAFA);
            padding: 0.5rem;
            border-radius: 8px;
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            gap: 6px;
            color: #10b981;
            font-weight: 600;
            border: 1px solid rgba(16, 185, 129, 0.1);
        }

        /* Profile Stats */
        .profile-stats {
          display: flex;
          gap: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .profile-stat {
          flex: 1;
          text-align: center;
        }

        .stat-num {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #F97316, #EA580C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-lbl {
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Dashboard Main Content (Right Center - Staggered Low) */
        .dashboard-card {
           top: 15%;
           right: -5%;
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
            background: linear-gradient(180deg, rgba(249, 115, 22, 0.02), transparent);
        }

        .card-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-icon {
          color: #F97316;
        }

        .card-actions {
          display: flex;
          gap: 8px;
          color: #94a3b8;
        }

        .action-btn {
          position: relative;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(249, 115, 22, 0.05);
          cursor: pointer;
          transition: all 0.3s;
        }

        .action-btn:hover {
          background: rgba(249, 115, 22, 0.15);
          color: #F97316;
        }

        .notification-dot {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 6px;
          height: 6px;
          background: #EF4444;
          border-radius: 50%;
          border: 1.5px solid white;
          animation: pulse-notification 2s ease-in-out infinite;
        }

        @keyframes pulse-notification {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

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
            top: 62%;
            right: 8%;
            width: 220px;
            padding: 1.25rem;
            z-index: 3;
            background: white;
        }
        
        .small-chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
        }

        .small-chart-label {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .small-chart-value {
          font-size: 1.125rem;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .trend-up {
          font-size: 1rem;
          color: #10b981;
          font-weight: 700;
        }

        .small-chart-svg {
          height: 50px;
          width: 100%;
        }

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
             gap: 3rem;
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
          .hero-engine {
            height: 700px;
            margin-top: 2rem;
          }

          /* Tablet view - adjust card positions */
          .ui-assembly {
            transform: scale(0.85);
          }

          .profile-card {
            left: 5%;
            top: 5%;
          }

          .dashboard-card {
            right: 5%;
            top: 20%;
          }

          .small-chart-card {
            right: 15%;
            bottom: 10%;
          }
        }

        @media (max-width: 768px) {
          .hero-engine {
            height: 900px;
          }

          /* Mobile view - stack cards vertically */
          .ui-assembly {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 2rem 1rem;
            transform: none;
          }

          .ui-card {
            position: relative !important;
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            max-width: 320px;
            height: auto !important;
          }

          .profile-card {
            order: 1;
          }

          .dashboard-card {
            order: 2;
          }

          .small-chart-card {
            order: 3;
          }

          .assembly-particles {
            display: none;
          }

          .connection-lines {
            display: none;
          }

          .code-window {
            max-width: 90%;
            transform: scale(0.9);
          }
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

          .hero-engine {
            height: 850px;
          }

          .ui-card {
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
}
