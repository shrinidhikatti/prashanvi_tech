export function Stats() {
    const stats = [
        { value: '8+', label: 'Projects Delivered' },
        { value: '6+', label: 'Happy Clients' },
        { value: '7+', label: 'Years Experience' },
        { value: '24/7', label: 'Support' },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h2 className="text-primary">{stat.value}</h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .stats-section {
          padding: 3rem 0;
          background: #FFF1EC;
          border-top: 1px solid #fed7aa;
          border-bottom: 1px solid #fed7aa;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-item h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
        </section>
    );
}
