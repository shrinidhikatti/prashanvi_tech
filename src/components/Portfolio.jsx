export function Portfolio() {
  const projects = [
    {
      title: 'ERP Enterprise Resource Planning',
      category: 'Enterprise Solution',
      match: 'Enterspice',
      description: 'Comprehensive resource management system for large-scale operations.',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5D6C 100%)'
    },
    {
      title: 'Trade with Sagar',
      category: 'FinTech',
      match: 'Trading Tips',
      description: 'Real-time stock analysis and trading tips platform.',
      gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)'
    },
    {
      title: 'Prerane Software',
      category: 'EdTech',
      match: 'Education',
      description: 'Educational platform designed to enhance learning experiences.',
      gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)'
    },
    {
      title: 'Horoscopebook',
      category: 'Lifestyle',
      match: 'Astrology',
      description: 'Personalized horoscope and astrology insights application.',
      gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)'
    },
    {
      title: 'Shakti Kit',
      category: 'E-Commerce',
      match: 'Product',
      description: 'Direct-to-consumer product kit with seamless purchasing flow.',
      gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)'
    },
    {
      title: 'Quickvenue.in',
      category: 'Booking System',
      match: 'Hall Booking',
      description: 'Venue booking platform for events, weddings, and parties.',
      gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="header-group">
          <div>
            <span className="text-primary font-bold tracking-wider">OUR WORK</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">A showcase of our recent technical achievements and digital solutions.</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="project-preview" style={{ background: project.gradient }}>
                <div className="preview-overlay">
                  <span className="preview-match">{project.match}</span>
                </div>
                <div className="card-decoration"></div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="arrow-icon">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
            padding: 5rem 0;
            background-color: #f8f9fa;
        }
        
        .header-group {
            margin-bottom: 4rem;
            text-align: center;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .section-title {
            font-size: 3rem;
            color: #1a1a1a;
            margin-top: 0.5rem;
            margin-bottom: 1rem;
            font-weight: 800;
            letter-spacing: -0.02em;
        }
        
        .section-subtitle {
            font-size: 1.125rem;
            color: #666;
            line-height: 1.6;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            padding: 1rem;
        }

        .project-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .project-preview {
            height: 220px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        
        .preview-overlay {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(5px);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .project-card:hover .preview-overlay {
            opacity: 1;
        }
        
        .preview-match {
            font-weight: 800;
            font-size: 1.5rem;
            color: white;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transform: translateY(20px);
            transition: transform 0.4s ease;
        }
        
        .project-card:hover .preview-match {
            transform: translateY(0);
        }
        
        /* Decorative circle */
        .card-decoration {
            position: absolute;
            top: -50px;
            right: -50px;
            width: 150px;
            height: 150px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
        }

        .project-info {
            padding: 2rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .project-category {
            font-size: 0.75rem;
            text-transform: uppercase;
            color: #6366f1;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
        }

        .project-info h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 0.75rem;
            line-height: 1.3;
        }
        
        .project-description {
            font-size: 0.95rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex-grow: 1;
        }
        
        .arrow-icon {
            align-self: flex-end;
            font-size: 1.5rem;
            color: #1a1a1a;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.3s ease;
        }
        
        .project-card:hover .arrow-icon {
            opacity: 1;
            transform: translateX(0);
        }

        @media (max-width: 1024px) {
            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .section-title {
                font-size: 2.25rem;
            }
        }
      `}</style>
    </section>
  );
}
