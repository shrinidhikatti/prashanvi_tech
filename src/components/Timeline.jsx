export function Timeline() {
    const steps = [
        { year: '01', title: 'Discovery', desc: 'Understanding your business needs and goals.' },
        { year: '02', title: 'Strategy', desc: 'Planning the roadmap and technical architecture.' },
        { year: '03', title: 'Development', desc: 'Building your solution with clean, efficient code.' },
        { year: '04', title: 'Launch', desc: 'Deploying to production and post-launch support.' },
    ];

    return (
        <section id="timeline" className="section bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold">PROCESS</span>
                    <h2 className="section-title">How We Work</h2>
                </div>

                <div className="timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content card">
                                <span className="step-number">{step.year}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
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
          font-weight: 800;
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .marker-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary);
          border: 4px solid #fed7aa;
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          background: #f3f4f6;
          flex: 1;
          margin-top: -10px;
          min-height: 100px;
        }

        .timeline-item:last-child .timeline-line {
          display: none;
        }

        .timeline-content {
          flex: 1;
          position: relative;
          padding: 1.5rem 2rem;
        }
        
        .step-number {
          font-size: 3rem;
          font-weight: 900;
          color: #f3f4f6;
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          line-height: 1;
        }

        .timeline-content h3 {
          color: var(--secondary);
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .timeline-content p {
          color: var(--text-light);
          position: relative;
          z-index: 2;
        }
      `}</style>
        </section>
    );
}
