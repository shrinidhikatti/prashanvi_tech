export function Portfolio() {
    const projects = [
        { title: 'E-Commerce Platform', category: 'Web App', color: '#E0F2F1' },
        { title: 'Finance Dashboard', category: 'UI Design', color: '#F3E5F5' },
        { title: 'Travel Companion', category: 'Mobile App', color: '#E3F2FD' },
    ];

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="header-group">
                    <div>
                        <span className="text-primary font-bold">PORTFOLIO</span>
                        <h2 className="section-title">Recent Works</h2>
                    </div>
                    <a href="#" className="btn btn-light">View All Works</a>
                </div>

                <div className="grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-preview" style={{ background: project.color }}>
                                <span className="project-preview-text">Preview</span>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .header-group {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.25rem;
          color: var(--secondary);
          margin-top: 0.5rem;
          font-weight: 800;
        }

        .project-card {
          background: white;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-preview {
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .project-preview-text {
          font-weight: 700;
          opacity: 0.3;
          font-size: 1.5rem;
          text-transform: uppercase;
        }

        .project-info {
          padding: 1.5rem;
        }

        .project-category {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .project-info h3 {
          margin-top: 0.5rem;
          color: var(--secondary);
        }

        @media (max-width: 768px) {
          .header-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
        </section>
    );
}
