import restrosyncImg from '../assets/restrosync.jpeg';
import billingImg from '../assets/billing.jpeg';
import ssmsImg from '../assets/ssms.jpeg';

const products = [
  {
    name: 'RestroSync',
    tagline: 'Restaurant Management SaaS',
    description: 'A Petpooja-style multi-tenant POS built for modern restaurants — from street-side dhabas to fine dining chains.',
    image: restrosyncImg,
    accent: '#F97316',
    accentLight: 'rgba(249,115,22,0.12)',
    badge: 'Restaurant SaaS',
    demoUrl: 'https://restrosync.prashanvitech.com/',
    features: [
      'Real-time Kitchen Display (KDS) & KOT management',
      'Multi-mode: Dine-in, Takeaway, Delivery',
      'GST billing with split / merge / refunds',
      'Inventory, CRM & loyalty points engine',
      'Flutter Captain App for table-side ordering',
      'Multi-outlet dashboard & branch analytics',
    ],
    stack: ['NestJS', 'React 18', 'PostgreSQL', 'Redis', 'Flutter'],
  },
  {
    name: 'ShopBill',
    tagline: 'Offline-First Billing Software',
    description: 'A GST-ready desktop billing app for Indian kirana and retail shops — works without internet, syncs to the cloud.',
    image: billingImg,
    accent: '#6366F1',
    accentLight: 'rgba(99,102,241,0.12)',
    badge: 'Retail SaaS',
    demoUrl: 'https://billing.prashanvitech.com/',
    features: [
      'Offline-first with cloud sync (Electron + SQLite)',
      'GST calculator, GSTR-1 export, tax reports',
      '6 languages — English, Hindi, Kannada & more',
      'Thermal printing, barcode scanner & UPI QR',
      'Customer ledger (khata), supplier & stock management',
      'Day-end closing, audit log & role-based PIN login',
    ],
    stack: ['Electron', 'React 18', 'SQLite', 'Django', 'i18next'],
  },
  {
    name: 'Stylix',
    tagline: 'Salon & Spa Management System',
    description: 'A full-stack multi-tenant SaaS for salons and spas — real-time queue, loyalty engine, customer mobile app and GST billing.',
    image: ssmsImg,
    accent: '#8B5CF6',
    accentLight: 'rgba(139,92,246,0.12)',
    badge: 'Salon SaaS',
    demoUrl: 'https://stylix.prashanvitech.com/',
    features: [
      'Real-time queue management via Socket.io',
      'GST billing with thermal print server',
      'Loyalty points engine & customer profiles',
      'Customer mobile app (React Native / Expo)',
      'Multi-tenant: each salon fully isolated',
      'Role-based access: Admin, Worker, Billing, Customer',
    ],
    stack: ['Next.js 14', 'Express', 'tRPC', 'PostgreSQL', 'React Native'],
  },
];

export function Products() {
  return (
    <section id="products" className="products-section">
      <div className="products-bg-blob products-bg-blob-1"></div>
      <div className="products-bg-blob products-bg-blob-2"></div>

      <div className="container">
        {/* Header */}
        <div className="products-header">
          <span className="products-eyebrow">OUR PRODUCTS</span>
          <h2 className="products-title">SaaS Products Built In-House</h2>
          <p className="products-subtitle">
            Real, production-ready software we designed, built, and now offer as standalone products.
            Try the live demo — no signup required.
          </p>
        </div>

        {/* Cards */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              {/* Image */}
              <div className="product-image-wrap">
                {/* Live Demo Badge — inside image wrap so it's not clipped by card radius */}
                <div className="live-badge">
                  <span className="live-dot"></span>
                  Live Demo Available
                </div>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-image-overlay"></div>
                <div
                  className="product-image-gradient"
                  style={{ background: `linear-gradient(to top, ${product.accent}22 0%, transparent 60%)` }}
                ></div>
              </div>

              {/* Body */}
              <div className="product-body">
                {/* Badge + Name */}
                <div className="product-top">
                  <span
                    className="product-badge"
                    style={{ background: product.accentLight, color: product.accent }}
                  >
                    {product.badge}
                  </span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-desc">{product.description}</p>
                </div>

                {/* Features */}
                <ul className="product-features">
                  {product.features.map((f, i) => (
                    <li key={i} className="product-feature">
                      <span
                        className="feature-dot"
                        style={{ background: product.accent }}
                      ></span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Stack Pills */}
                <div className="product-stack">
                  {product.stack.map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-cta"
                  style={{ background: product.accent }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  View Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-section {
          padding: 6rem 0;
          background: #0B1120;
          position: relative;
          overflow: hidden;
        }

        .products-bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.25;
        }

        .products-bg-blob-1 {
          width: 500px;
          height: 500px;
          background: #F97316;
          top: -180px;
          left: -120px;
        }

        .products-bg-blob-2 {
          width: 400px;
          height: 400px;
          background: #6366F1;
          bottom: -150px;
          right: -80px;
        }

        /* Header */
        .products-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .products-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 3px;
          color: #F97316;
          margin-bottom: 1rem;
          position: relative;
          padding: 0 1.5rem;
        }

        .products-eyebrow::before,
        .products-eyebrow::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 28px;
          height: 1.5px;
          background: #F97316;
        }
        .products-eyebrow::before { left: 0; }
        .products-eyebrow::after { right: 0; }

        .products-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .products-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.5);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        /* Card */
        .product-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.3s ease,
                      box-shadow 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .product-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.16);
          box-shadow: 0 32px 64px rgba(0,0,0,0.4);
        }

        /* Live badge — anchored at the BOTTOM of image wrap (avoids rounded-corner clipping) */
        .live-badge {
          position: absolute;
          bottom: 0.85rem;
          left: 0.85rem;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34D399;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          backdrop-filter: blur(8px);
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #34D399;
          border-radius: 50%;
          animation: livePulse 2s ease-in-out infinite;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        /* Image */
        .product-image-wrap {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
        }

        .product-card:hover .product-image {
          transform: scale(1.06);
        }

        .product-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,17,32,0.2);
        }

        .product-image-gradient {
          position: absolute;
          inset: 0;
        }

        /* Body */
        .product-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1.25rem;
        }

        .product-top {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .product-badge {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          width: fit-content;
          margin-bottom: 0.25rem;
        }

        .product-name {
          font-size: 1.6rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .product-tagline {
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .product-desc {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.65;
          margin-top: 0.25rem;
        }

        /* Features */
        .product-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin: 0;
          padding: 0;
        }

        .product-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.845rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.45rem;
        }

        /* Stack pills */
        .product-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .stack-pill {
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          letter-spacing: 0.3px;
        }

        /* CTA */
        .product-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.9rem 1.5rem;
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
          margin-top: auto;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }

        .product-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
          filter: brightness(1.1);
        }

        .product-cta svg {
          transition: transform 0.3s ease;
        }

        .product-cta:hover svg {
          transform: translate(2px, -2px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .products-section {
            padding: 4rem 0;
          }

          .products-grid {
            max-width: 100%;
          }

          .product-image-wrap {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
