import { Layout, Smartphone, PenTool, TrendingUp, Shield, Brain, Database, Lock, GraduationCap } from 'lucide-react';

export function Services() {
    const services = [
        {
            icon: <Layout size={26} />,
            title: 'Web Development',
            description: 'Custom websites built with modern technologies like React, Next.js, and Node.js for speed and SEO.',
            number: '01'
        },
        {
            icon: <Smartphone size={26} />,
            title: 'App Development',
            description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
            number: '02'
        },
        {
            icon: <PenTool size={26} />,
            title: 'UI/UX Design',
            description: 'User-centric design solutions that are visually stunning and intuitive to navigate.',
            number: '03'
        },
        {
            icon: <TrendingUp size={26} />,
            title: 'Digital Consulting',
            description: 'Strategic guidance to help you navigate the digital landscape and grow your business.',
            number: '04'
        }
    ];

    const cyberServices = [
        {
            icon: <Shield size={24} />,
            title: 'GRC & Compliance',
            color: '#6366F1',
            colorLight: 'rgba(99,102,241,0.12)',
            items: [
                'ISO 27001 Gap Assessment & Certification Readiness',
                'DORA Compliance Gap Analysis & Implementation',
                'SOC 2 Audit Readiness Assessment',
                'NIST CSF Maturity Assessment & Roadmap',
                'Cybersecurity Policy & Standards Writing',
            ]
        },
        {
            icon: <Brain size={24} />,
            title: 'AI Governance & Security',
            color: '#8B5CF6',
            colorLight: 'rgba(139,92,246,0.12)',
            items: [
                'AI Governance Framework (NIST AI RMF + ISO 42001)',
                'Agentic AI Security Assessment & Controls',
                'MCP Architecture Security Review',
                'AI Risk Assessment & Policy Development',
                'Third-Party AI & MCP Server Risk Review',
            ]
        },
        {
            icon: <Database size={24} />,
            title: 'Data Governance',
            color: '#06B6D4',
            colorLight: 'rgba(6,182,212,0.12)',
            items: [
                'Enterprise Data Governance Framework (DAMA-DMBOK)',
                'Data Quality Framework & KPI Design',
                'Enterprise Data Policy Library Development',
                'Master & Reference Data Management Strategy',
                'Data Domain Governance Operationalization',
            ]
        },
        {
            icon: <Lock size={24} />,
            title: 'TPRM & Privacy',
            color: '#10B981',
            colorLight: 'rgba(16,185,129,0.12)',
            items: [
                'TPRM Programme Design & Implementation',
                'OneTrust Setup — TPRM + Privacy Modules',
                'GDPR Privacy Compliance Assessment',
                'Vendor Security Questionnaire & Due Diligence',
            ]
        },
        {
            icon: <GraduationCap size={24} />,
            title: 'Training & Workshops',
            color: '#F59E0B',
            colorLight: 'rgba(245,158,11,0.12)',
            items: [
                'Information Security Awareness Training',
                'AI Tools Workshop — ChatGPT, Claude, Gemini, Copilot',
                'Agentic AI & MCP Security for GRC Teams',
                'DORA Awareness for Financial Services',
            ]
        },
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header">
                    <span className="services-label">OUR SERVICES</span>
                    <h2 className="services-title">What We Offer</h2>
                    <p className="services-desc">Comprehensive digital solutions tailored to your business needs.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-accent"></div>
                            <span className="service-num">{service.number}</span>
                            <div className="service-icon-wrap">
                                {service.icon}
                            </div>
                            <h3 className="service-name">{service.title}</h3>
                            <p className="service-desc-text">{service.description}</p>
                            <div className="service-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cybersecurity Section */}
            <div className="cyber-section">
                <div className="container">
                    <div className="cyber-header">
                        <div className="cyber-badge">
                            <Shield size={14} />
                            CYBERSECURITY & GRC
                        </div>
                        <h2 className="cyber-title">Enterprise Security Services</h2>
                        <p className="cyber-subtitle">
                            Expert-led GRC, AI governance, data security, and compliance services —
                            certified CISM, CISA & CRISC professionals with 10+ years of experience.
                        </p>
                    </div>

                    <div className="cyber-grid">
                        {cyberServices.map((svc, i) => (
                            <div key={i} className="cyber-card">
                                <div className="cyber-card-top">
                                    <div className="cyber-icon" style={{ background: svc.colorLight, color: svc.color }}>
                                        {svc.icon}
                                    </div>
                                    <h3 className="cyber-card-title" style={{ color: svc.color }}>{svc.title}</h3>
                                </div>
                                <ul className="cyber-list">
                                    {svc.items.map((item, j) => (
                                        <li key={j} className="cyber-list-item">
                                            <span className="cyber-dot" style={{ background: svc.color }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="cyber-cta-wrap">
                        <a href="#contact" className="cyber-cta">
                            <Shield size={16} />
                            Book a Free Consultation
                        </a>
                        <p className="cyber-cta-note">ISO 27001 · DORA · SOC 2 · NIST · GDPR · AI Governance</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .services-section {
                    padding: 5rem 0;
                    background: #ffffff;
                    position: relative;
                }

                .services-header {
                    text-align: center;
                    margin-bottom: 3.75rem;
                }

                .services-label {
                    display: inline-block;
                    font-size: 0.74rem;
                    font-weight: 700;
                    color: #FF5722;
                    letter-spacing: 2.5px;
                    position: relative;
                    padding: 0 1.75rem;
                }

                .services-label::before,
                .services-label::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    width: 32px;
                    height: 2px;
                    background: #FF5722;
                    border-radius: 1px;
                }
                .services-label::before { left: 0; }
                .services-label::after { right: 0; }

                .services-title {
                    font-size: 2.75rem;
                    color: #263238;
                    margin-top: 0.75rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }

                .services-desc {
                    color: #6B7280;
                    max-width: 540px;
                    margin: 0.85rem auto 0;
                    font-size: 1.02rem;
                    line-height: 1.65;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.75rem;
                }

                .service-card {
                    background: #ffffff;
                    border: 1.5px solid #eee;
                    border-radius: 20px;
                    padding: 2.25rem 1.75rem 2rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-align: left;
                }

                .service-card:hover {
                    border-color: transparent;
                    box-shadow: 0 16px 48px rgba(255, 87, 34, 0.1), 0 4px 12px rgba(0,0,0,0.06);
                    transform: translateY(-6px);
                }

                .service-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FF5722, #FF8A65);
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }

                .service-card:hover .service-accent {
                    opacity: 1;
                }

                .service-num {
                    font-size: 0.76rem;
                    font-weight: 800;
                    color: rgba(255, 87, 34, 0.32);
                    letter-spacing: 1px;
                    display: block;
                    margin-bottom: 1rem;
                }

                .service-icon-wrap {
                    width: 52px;
                    height: 52px;
                    background: #FFF1EC;
                    color: #FF5722;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.4rem;
                    transition: all 0.3s ease;
                }

                .service-card:hover .service-icon-wrap {
                    background: #FF5722;
                    color: #ffffff;
                    transform: scale(1.06);
                }

                .service-name {
                    color: #263238;
                    font-size: 1.18rem;
                    font-weight: 700;
                    margin-bottom: 0.7rem;
                }

                .service-desc-text {
                    font-size: 0.9rem;
                    color: #6B7280;
                    line-height: 1.65;
                }

                .service-arrow {
                    font-size: 1.25rem;
                    color: #FF5722;
                    margin-top: 1.25rem;
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.3s ease;
                }

                .service-card:hover .service-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }

                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    .services-title {
                        font-size: 2rem;
                    }
                }

                /* ── Cybersecurity Section ── */
                .cyber-section {
                    background: #0B1120;
                    padding: 5rem 0 4rem;
                    margin-top: 5rem;
                    position: relative;
                    overflow: hidden;
                }

                .cyber-section::before {
                    content: '';
                    position: absolute;
                    top: -200px;
                    left: -150px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%);
                    pointer-events: none;
                }

                .cyber-section::after {
                    content: '';
                    position: absolute;
                    bottom: -150px;
                    right: -100px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
                    pointer-events: none;
                }

                .cyber-header {
                    text-align: center;
                    margin-bottom: 3.5rem;
                    position: relative;
                    z-index: 1;
                }

                .cyber-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.45rem;
                    background: rgba(99,102,241,0.15);
                    border: 1px solid rgba(99,102,241,0.35);
                    color: #818CF8;
                    font-size: 0.7rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    margin-bottom: 1.25rem;
                }

                .cyber-title {
                    font-size: clamp(1.9rem, 3.5vw, 2.75rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -0.03em;
                    line-height: 1.15;
                    margin-bottom: 1rem;
                }

                .cyber-subtitle {
                    font-size: 1rem;
                    color: rgba(255,255,255,0.45);
                    max-width: 580px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .cyber-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    position: relative;
                    z-index: 1;
                }

                .cyber-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    padding: 1.75rem;
                    transition: transform 0.35s cubic-bezier(0.23,1,0.32,1),
                                border-color 0.3s ease,
                                box-shadow 0.35s ease;
                }

                .cyber-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(255,255,255,0.15);
                    box-shadow: 0 24px 48px rgba(0,0,0,0.35);
                }

                .cyber-card-top {
                    display: flex;
                    align-items: center;
                    gap: 0.9rem;
                    margin-bottom: 1.25rem;
                }

                .cyber-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .cyber-card-title {
                    font-size: 1.05rem;
                    font-weight: 800;
                    line-height: 1.2;
                }

                .cyber-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    margin: 0;
                    padding: 0;
                }

                .cyber-list-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.6rem;
                    font-size: 0.83rem;
                    color: rgba(255,255,255,0.6);
                    line-height: 1.5;
                }

                .cyber-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    margin-top: 0.45rem;
                }

                .cyber-cta-wrap {
                    text-align: center;
                    margin-top: 3rem;
                    position: relative;
                    z-index: 1;
                }

                .cyber-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    background: linear-gradient(135deg, #6366F1, #8B5CF6);
                    color: #ffffff;
                    font-size: 0.95rem;
                    font-weight: 700;
                    padding: 0.9rem 2rem;
                    border-radius: 12px;
                    text-decoration: none;
                    box-shadow: 0 8px 24px rgba(99,102,241,0.35);
                    transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
                }

                .cyber-cta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 14px 36px rgba(99,102,241,0.5);
                    filter: brightness(1.1);
                }

                .cyber-cta-note {
                    margin-top: 1rem;
                    font-size: 0.78rem;
                    color: rgba(255,255,255,0.25);
                    letter-spacing: 0.5px;
                }

                @media (max-width: 1024px) {
                    .cyber-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .cyber-grid {
                        grid-template-columns: 1fr;
                    }
                    .cyber-section {
                        padding: 3.5rem 0 3rem;
                        margin-top: 3rem;
                    }
                }
            `}</style>
        </section>
    );
}
