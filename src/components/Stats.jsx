import { Briefcase, Users, Clock, Headphones } from 'lucide-react';

export function Stats() {
    const stats = [
        { value: '8+', label: 'Projects Delivered', icon: <Briefcase size={24} /> },
        { value: '6+', label: 'Happy Clients', icon: <Users size={24} /> },
        { value: '7+', label: 'Years Experience', icon: <Clock size={24} /> },
        { value: '24/7', label: 'Support', icon: <Headphones size={24} /> },
    ];

    return (
        <section className="stats-section">
            <div className="stats-glow stats-glow-1"></div>
            <div className="stats-glow stats-glow-2"></div>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-icon-wrap">
                                {stat.icon}
                            </div>
                            <h2 className="stat-value">{stat.value}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .stats-section {
                    padding: 4.5rem 0;
                    background: linear-gradient(135deg, #1c2b32 0%, #263238 45%, #1e2d34 100%);
                    position: relative;
                    overflow: hidden;
                }

                .stats-glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    pointer-events: none;
                }

                .stats-glow-1 {
                    width: 320px;
                    height: 320px;
                    background: rgba(255, 87, 34, 0.18);
                    top: -140px;
                    left: 8%;
                }

                .stats-glow-2 {
                    width: 220px;
                    height: 220px;
                    background: rgba(255, 138, 101, 0.14);
                    bottom: -100px;
                    right: 12%;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    position: relative;
                    z-index: 1;
                }

                .stat-item {
                    text-align: center;
                    padding: 1.5rem 1rem;
                    position: relative;
                    transition: transform 0.35s ease;
                }

                .stat-item:hover {
                    transform: translateY(-4px);
                }

                .stat-item:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 18%;
                    height: 64%;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.13), transparent);
                }

                .stat-icon-wrap {
                    width: 56px;
                    height: 56px;
                    background: rgba(255, 87, 34, 0.1);
                    border: 1px solid rgba(255, 87, 34, 0.22);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.25rem;
                    color: #FF5722;
                    transition: all 0.35s ease;
                }

                .stat-item:hover .stat-icon-wrap {
                    background: rgba(255, 87, 34, 0.2);
                    border-color: rgba(255, 87, 34, 0.4);
                    box-shadow: 0 0 24px rgba(255, 87, 34, 0.18);
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #263238;
                    margin-bottom: 0.3rem;
                    letter-spacing: -0.025em;
                    line-height: 1;
                }

                .stat-label {
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.48);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-size: 0.76rem;
                }

                @media (max-width: 768px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .stat-item:not(:last-child)::after {
                        display: none;
                    }
                    .stat-item:nth-child(odd):not(:last-child)::after {
                        display: block;
                    }
                }
            `}</style>
        </section>
    );
}
