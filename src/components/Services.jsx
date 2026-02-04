import { Layout, Smartphone, PenTool, TrendingUp } from 'lucide-react';

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
            `}</style>
        </section>
    );
}
