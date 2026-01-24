import { Layout, Smartphone, PenTool, TrendingUp } from 'lucide-react';

export function Services() {
    const services = [
        {
            icon: <Layout size={32} />,
            title: 'Web Development',
            description: 'Custom websites built with modern technologies like React, Next.js, and Node.js for speed and SEO.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'App Development',
            description: 'Native and cross-platform mobile applications that provide seamless user experiences.'
        },
        {
            icon: <PenTool size={32} />,
            title: 'UI/UX Design',
            description: 'User-centric design solutions that are visually stunning and intuitive to navigate.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Digital Consulting',
            description: 'Strategic guidance to help you navigate the digital landscape and grow your business.'
        }
    ];

    return (
        <section id="services" className="section bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold">OUR SERVICES</span>
                    <h2 className="section-title">What We Offer</h2>
                    <p className="section-desc">Comprehensive digital solutions tailored to your business needs.</p>
                </div>

                <div className="grid-cols-4">
                    {services.map((service, index) => (
                        <div key={index} className="card service-card">
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-white { background-color: var(--white); }
        
        .mb-12 { margin-bottom: 3rem; }
        
        .section-title {
          font-size: 2.25rem;
          color: var(--secondary);
          margin-top: 0.5rem;
          font-weight: 800;
        }
        
        .section-desc {
          color: var(--text-light);
          max-width: 600px;
          margin: 1rem auto 0;
        }

        .service-card {
          text-align: center;
          padding: 2.5rem 1.5rem;
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: #FFF1EC;
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .service-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: var(--primary);
          color: white;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: var(--secondary);
          font-size: 1.25rem;
        }
        
        .service-card p {
          font-size: 0.95rem;
          color: var(--text-light);
        }
      `}</style>
        </section>
    );
}
