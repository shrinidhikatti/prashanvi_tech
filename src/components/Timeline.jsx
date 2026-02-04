export function Timeline() {
    const steps = [
        { year: '01', title: 'Discovery', desc: 'Understanding your business needs and goals.' },
        { year: '02', title: 'Strategy', desc: 'Planning the roadmap and technical architecture.' },
        { year: '03', title: 'Development', desc: 'Building your solution with clean, efficient code.' },
        { year: '04', title: 'Launch', desc: 'Deploying to production and post-launch support.' },
    ];

    return (
        <section id="timeline" className="timeline-section">
            <div className="container">
                <div className="timeline-header">
                    <span className="timeline-label">PROCESS</span>
                    <h2 className="timeline-title">How We Work</h2>
                </div>

                <div className="timeline-wrapper">
                    {steps.map((step, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
                            <div className="tl-content">
                                <div className="tl-badge">{step.year}</div>
                                <h3 className="tl-name">{step.title}</h3>
                                <p className="tl-desc">{step.desc}</p>
                            </div>
                            <div className="tl-dot">
                                <div className="tl-dot-inner"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .timeline-section {
                    padding: 5rem 0;
                    background: #ffffff;
                }

                .timeline-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .timeline-label {
                    display: inline-block;
                    font-size: 0.74rem;
                    font-weight: 700;
                    color: #FF5722;
                    letter-spacing: 2.5px;
                }

                .timeline-title {
                    font-size: 2.75rem;
                    color: #263238;
                    font-weight: 800;
                    margin-top: 0.75rem;
                    letter-spacing: -0.02em;
                }

                /* Wrapper holds the center line */
                .timeline-wrapper {
                    max-width: 880px;
                    margin: 0 auto;
                    position: relative;
                }

                .timeline-wrapper::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(to bottom, #FF5722, #FF8A65 50%, #FF5722);
                    transform: translateX(-50%);
                    border-radius: 2px;
                }

                /* Each row */
                .timeline-item {
                    display: flex;
                    position: relative;
                    margin-bottom: 3.5rem;
                }

                .timeline-item:last-child {
                    margin-bottom: 0;
                }

                /* Left: content floats left */
                .timeline-item.tl-left {
                    justify-content: flex-end;
                    padding-right: calc(50% + 30px);
                }

                .timeline-item.tl-left .tl-content {
                    text-align: right;
                }

                /* Right: content floats right */
                .timeline-item.tl-right {
                    justify-content: flex-start;
                    padding-left: calc(50% + 30px);
                }

                /* Dot always sits on the center line */
                .tl-dot {
                    position: absolute;
                    left: 50%;
                    top: 1.75rem;
                    transform: translateX(-50%);
                    width: 24px;
                    height: 24px;
                    z-index: 2;
                }

                .tl-dot-inner {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 3px solid #FF5722;
                    box-shadow: 0 0 0 5px rgba(255, 87, 34, 0.12);
                    transition: all 0.35s ease;
                }

                .timeline-item:hover .tl-dot-inner {
                    background: #FF5722;
                    box-shadow: 0 0 16px rgba(255, 87, 34, 0.38);
                }

                /* Content card */
                .tl-content {
                    background: #ffffff;
                    border: 1.5px solid #eee;
                    border-radius: 18px;
                    padding: 2rem 2.25rem;
                    max-width: 340px;
                    transition: all 0.35s ease;
                    box-shadow: 0 3px 14px rgba(0,0,0,0.05);
                }

                .timeline-item:hover .tl-content {
                    border-color: rgba(255, 87, 34, 0.28);
                    box-shadow: 0 10px 36px rgba(255, 87, 34, 0.1);
                    transform: translateY(-3px);
                }

                .tl-badge {
                    display: inline-block;
                    font-size: 0.74rem;
                    font-weight: 800;
                    color: #FF5722;
                    background: rgba(255, 87, 34, 0.1);
                    padding: 0.28rem 0.8rem;
                    border-radius: 20px;
                    letter-spacing: 1px;
                    margin-bottom: 0.7rem;
                }

                .tl-name {
                    color: #263238;
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 0.45rem;
                }

                .tl-desc {
                    color: #6B7280;
                    font-size: 0.92rem;
                    line-height: 1.6;
                }

                /* ── Mobile: single column ── */
                @media (max-width: 768px) {
                    .timeline-wrapper::before {
                        left: 22px;
                        transform: none;
                    }

                    .timeline-item.tl-left,
                    .timeline-item.tl-right {
                        padding-left: 60px;
                        padding-right: 0;
                        justify-content: flex-start;
                    }

                    .timeline-item.tl-left .tl-content {
                        text-align: left;
                    }

                    .tl-dot {
                        left: 22px;
                        transform: translateX(-50%);
                    }

                    .tl-content {
                        max-width: 100%;
                    }

                    .timeline-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
