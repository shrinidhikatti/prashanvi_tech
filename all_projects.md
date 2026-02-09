


project no 1 : 🛠️ Complete Tech Stack of ERP System

  Frontend Technologies

  Core Framework

  - React 19.1.1 - UI library
  - TypeScript 5.9.3 - Type-safe JavaScript
  - Vite 7.1.12 - Build tool & dev server (fast HMR)

  Routing & State Management

  - React Router DOM 7.9.4 - Client-side routing
  - TanStack React Query 5.90.5 - Server state management, caching, data fetching
  - React Context API - Authentication state management

  UI & Styling

  - Tailwind CSS 3.4.18 - Utility-first CSS framework
  - @tailwindcss/forms 0.5.10 - Form styling
  - PostCSS 8.5.6 - CSS processing
  - Autoprefixer 10.4.21 - CSS vendor prefixing

  Icons & Components

  - Lucide React 0.548.0 - Icon library
  - Recharts 3.3.0 - Charts and data visualization

  HTTP Client

  - Axios 1.12.2 - Promise-based HTTP client

  Utilities

  - date-fns 4.1.0 - Date manipulation library

  ---
  Backend Technologies

  Core Framework

  - Node.js - JavaScript runtime
  - Express 4.18.2 - Web application framework
  - TypeScript 5.3.3 - Type-safe backend code
  - ts-node 10.9.2 - TypeScript execution
  - Nodemon 3.0.2 - Auto-restart dev server

  Database

  - PostgreSQL - Relational database (production on Neon)
  - pg 8.11.3 - PostgreSQL client for Node.js
  - Connection Pool - Efficient database connections

  Authentication & Security

  - jsonwebtoken 9.0.2 - JWT token generation & verification
  - bcryptjs 2.4.3 - Password hashing
  - CORS 2.8.5 - Cross-origin resource sharing

  Validation

  - express-validator 7.0.1 - Request validation middleware

  File Handling

  - multer 1.4.5-lts.1 - Multipart/form-data (file uploads)
  - @vercel/blob 2.0.0 - Vercel Blob storage for files

  Document Generation

  - PDFKit 0.14.0 - PDF generation
  - ExcelJS 4.4.0 - Excel file generation

  Email

  - Nodemailer 6.9.7 - Email sending

  Environment

  - dotenv 16.3.1 - Environment variable management

  ---
  Database Schema

  Tables:

  1. users - User accounts & roles
  2. customers - Customer information
  3. raw_materials - Material master data
  4. material_transactions - Material stock movements
  5. suppliers - Supplier master data
  6. purchase_orders - Purchase order headers
  7. po_items - Purchase order line items
  8. products - Product master data
  9. bill_of_materials (BOM) - Product-material mappings
  10. technical_diagrams - Product drawings & files
  11. work_orders - Customer orders
  12. work_order_items - Order line items
  13. production_batches - Production tracking
  14. production_consumption - Material usage in production
  15. quality_inspections - QC records
  16. rejection_details - Rejection reasons
  17. finished_goods - Finished product inventory
  18. scrap_inventory - Scrap & waste tracking
  19. delivery_challans - Delivery documents
  20. dc_items - Delivery challan items
  21. notifications - System notifications

  ---
  Development Tools

  Frontend Dev Tools

  - ESLint 9.36.0 - Code linting
  - @vitejs/plugin-react 5.0.4 - React plugin for Vite
  - TypeScript ESLint - TypeScript linting

  Backend Dev Tools

  - @types/ packages - TypeScript type definitions
  - Nodemon - Auto-reload on file changes

  ---
  Hosting & Deployment

  Production Environment

  Frontend Hosting

  - Vercel - Serverless deployment
    - Auto-deploy from GitHub
    - CDN distribution
    - Custom domain: https://vishwaengineers.com
    - Environment variables managed via Vercel CLI

  Backend Hosting

  - Vercel Serverless Functions - Backend API
    - Auto-deploy from GitHub
    - Serverless architecture
    - API URL: https://backend-[hash].vercel.app/api

  Database

  - Neon Database - Serverless PostgreSQL
    - Hosted PostgreSQL database
    - Connection pooling
    - Automatic scaling
    - Located in cloud (AWS/GCP)

  File Storage

  - Vercel Blob Storage - File uploads
    - Technical diagrams (PDF/Images)
    - QC photos
    - Delivery proofs

  Domain

  - Custom Domain: https://vishwaengineers.com
  - SSL Certificate: Auto-managed by Vercel
  - DNS: Configured for Vercel

  ---
  Development Environment

  Local Setup

  - Frontend: http://localhost:5173 (Vite dev server)
  - Backend: http://localhost:5000 (Express server)
  - Database: PostgreSQL local or Neon cloud
  - Environment Files:
    - .env in frontend (VITE_API_URL)
    - .env in backend (DATABASE_URL, JWT_SECRET, etc.)

  ---
  Version Control & CI/CD

  Repository

  - GitHub - Source code hosting
    - Repository: https://github.com/shrinidhikatti/ERP
    - Branch: main

  Deployment Pipeline

  1. Code push to GitHub
  2. Vercel auto-detects changes
  3. Builds frontend & backend separately
  4. Deploys to production
  5. Updates live site automatically

  ---
  Architecture

  Frontend Architecture

  React (SPA)
  ├── Components (Layout, Modals)
  ├── Pages (Dashboard, Materials, Production, etc.)
  ├── Context (AuthContext)
  ├── API Layer (Axios + React Query)
  └── Routing (React Router)

  Backend Architecture

  Express Server
  ├── Routes (API endpoints)
  ├── Controllers (Business logic)
  ├── Middleware (Auth, Validation)
  ├── Types (TypeScript interfaces)
  └── Database (PostgreSQL queries)

  Database Design

  Relational Model
  ├── Master Data (Users, Materials, Products, Suppliers)
  ├── Transactional Data (Orders, Production, Quality)
  ├── Inventory (Stock, Finished Goods, Scrap)
  └── Documents (Technical Diagrams, Deliveries)

  ---
  Security Features

  1. JWT Authentication - Token-based auth
  2. Password Hashing - bcrypt with salt
  3. Role-Based Access Control (RBAC) - 8 different roles
  4. CORS Protection - Whitelisted domains only
  5. SQL Injection Prevention - Parameterized queries
  6. XSS Prevention - Input validation
  7. HTTPS - SSL/TLS encryption
  8. Environment Variables - Secrets management

  ---
  Performance Optimizations

  1. React Query Caching - Reduces API calls
  2. Code Splitting - Lazy loading routes
  3. Connection Pooling - Database efficiency
  4. CDN Distribution - Fast global delivery
  5. Serverless - Auto-scaling
  6. Vite HMR - Fast development

  ---
  Mobile Responsive

  - Tailwind Breakpoints:
    - sm: - 640px (phones landscape)
    - md: - 768px (tablets)
    - lg: - 1024px (laptops)
    - xl: - 1280px (desktops)
  - Mobile Navigation - Hamburger menu
  - Touch-Friendly - Adequate button sizes
  - Horizontal Scroll Tables - overflow-x-auto

  ---
  Summary

  | Category   | Technology                               |
  |------------|------------------------------------------|
  | Frontend   | React + TypeScript + Vite + Tailwind CSS |
  | Backend    | Node.js + Express + TypeScript           |
  | Database   | PostgreSQL (Neon)                        |
  | Storage    | Vercel Blob                              |
  | Hosting    | Vercel (Frontend + Backend)              |
  | Domain     | https://vishwaengineers.com              |
  | Auth       | JWT + bcrypt                             |
  | API        | RESTful + Axios + React Query            |
  | Deployment | GitHub → Vercel Auto-Deploy              |

  This is a modern, serverless, full-stack TypeScript application with enterprise-grade features! 🚀


project no 2 :   Swing-trader

  Technologies & Frameworks

  Frontend

  - Next.js 14 - React-based framework with App Router
  - React 18.2 - UI library
  - Tailwind CSS 3.4 - Utility-first CSS framework
  - Lucide React - Icon library
  - React Calendar - Date picker component
  - TypeScript 5.3 - Type-safe JavaScript

  Backend

  - Next.js API Routes - Serverless API endpoints
  - Prisma ORM 5.7 - Database toolkit
  - PostgreSQL - Production database (schema.prisma:6)
  - Jose - JWT authentication library
  - bcryptjs - Password hashing
  - Node-cron - Scheduled task automation

  External Services

  - Yahoo Finance API - Stock price fetching via lib/stockApi.ts
  - Resend - Email service (for password resets)
  - Axios - HTTP client for API calls

  Development Tools

  - ESLint - Code linting
  - PostCSS - CSS processing
  - Autoprefixer - CSS vendor prefixing

  Hosting & Deployment

  Platform

  - Vercel - Primary hosting platform (vercel.json:1)
    - Custom build command: prisma generate && next build
    - Framework: Next.js
    - Serverless functions for API routes

  Database

  - PostgreSQL (Production) - schema.prisma:6-8
    - Uses connection pooling (DATABASE_URL)
    - Direct connection for migrations (DATABASE_POSTGRES_URL_NON_POOLING)

  Deployment Configuration

  - Automated builds on git push
  - Environment variables managed through Vercel dashboard
  - Database migrations run via Prisma on deployment

  Architecture

  - Serverless - All API routes run as serverless functions
  - Static + SSR - Next.js hybrid rendering
  - Edge-ready - Compatible with Vercel's Edge Network

  The app is deployed to Vercel with PostgreSQL as the production database, while local development can use SQLite (configurable via DATABASE_URL).

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
>  
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ? for shortcuts


Detailed below
Swing Trader Sagar - Complete Project Overview

  📊 Project Summary

  Swing Trader Sagar is a comprehensive stock trading calls management web application designed for a WhatsApp trading group with 1,453 members. It
  enables the admin to publish, track, and manage swing trading and long-term investment calls with automated price tracking and target verification.

  ---
  🎯 Core Features

  1. Trading Call Management

  - Create and manage trading calls with detailed information:
    - Script name (stock symbol)
    - LTP (Last Traded Price - entry price)
    - 3 target levels
    - Stop loss
    - Pattern type (TR, UB, BF, etc.)
    - Support/Resistance levels
    - Rank (1-10) and Top Pick designation
  - Trade Types: SWING (short-term) and LONG_TERM
  - Flash Cards: Golden priority cards displayed first
  - Event Markers: Track bonus/split/dividend events

  2. Scheduled Publishing

  - Schedule calls to publish at specific dates/times (8:45 AM)
  - Draft mode for unpublished calls
  - Auto-publishing via cron jobs

  3. Automated Price Tracking

  - Real-time price monitoring via Yahoo Finance API
  - Automatic target and stop-loss verification
  - Visual indicators: ✅ (target hit), ❌ (stop loss hit)
  - Individual timestamp tracking for each target hit
  - Manual price refresh capability

  4. User Management System

  - Admin Panel: Full CRUD access for managing calls
  - Member Registration: Self-service user signup
  - Admin Approval Workflow: Pending → Approved → Active
  - Subscription Management: Start/end dates for memberships
  - Password Reset: Self-service forgot password flow with email

  5. Calendar & Filtering

  - Date-wise call filtering
  - Status-based filtering (Active, Target Hit, SL Hit, etc.)
  - Trade type filtering (Swing vs Long-term)

  6. Dashboard Analytics

  - Real-time statistics:
    - Total calls
    - Active calls
    - Targets hit count
    - Stop loss hit count
  - Database viewer for admins

  7. Announcement System

  - Scrolling ticker for important messages
  - Admin can create/edit/disable announcements
  - Displayed across all pages

  8. Public Preview Mode

  - Non-logged-in users see sample data
  - Encourages registration with preview of 5 calls
  - Launch countdown feature

  ---
  🛠️ Technology Stack

  Frontend

  | Technology     | Version | Purpose                         |
  |----------------|---------|---------------------------------|
  | Next.js        | 14.0.4  | React framework with App Router |
  | React          | 18.2.0  | UI library                      |
  | TypeScript     | 5.3.3   | Type safety                     |
  | Tailwind CSS   | 3.4.0   | Styling                         |
  | Lucide React   | 0.298.0 | Icon library                    |
  | React Calendar | 4.7.0   | Date picker                     |
  | date-fns       | 3.0.0   | Date manipulation               |

  Backend

  | Technology         | Version | Purpose                  |
  |--------------------|---------|--------------------------|
  | Next.js API Routes | 14.0.4  | Serverless API endpoints |
  | Prisma ORM         | 5.7.1   | Database toolkit         |
  | PostgreSQL         | -       | Production database      |
  | Jose               | 5.2.0   | JWT authentication       |
  | bcryptjs           | 3.0.3   | Password hashing         |
  | Node-cron          | 3.0.3   | Task scheduling          |

  External Services

  | Service           | Purpose                          |
  |-------------------|----------------------------------|
  | Yahoo Finance API | Real-time stock prices           |
  | Resend            | Email delivery (password resets) |
  | Vercel            | Hosting platform                 |

  Development Tools

  - ESLint + Next.js config
  - PostCSS + Autoprefixer
  - Prisma Studio (database GUI)

  ---
  📁 Project Structure

  Swing-trader/
  ├── app/                          # Next.js App Router
  │   ├── page.tsx                  # Main dashboard (home page)
  │   ├── layout.tsx                # Root layout with metadata
  │   ├── globals.css               # Global styles + Tailwind
  │   │
  │   ├── login/                    # Admin login page
  │   │   └── page.tsx
  │   ├── user-login/               # Member login page
  │   │   └── page.tsx
  │   ├── register/                 # Member registration
  │   │   └── page.tsx
  │   ├── forgot-password/          # Password reset request
  │   │   └── page.tsx
  │   ├── reset-password/           # Password reset form
  │   │   └── [token]/page.tsx
  │   ├── manage-users/             # Admin: user approvals
  │   │   └── page.tsx
  │   ├── database-viewer/          # Admin: DB inspection
  │   │   └── page.tsx
  │   │
  │   └── api/                      # API Routes (Serverless)
  │       ├── calls/                # Trading calls CRUD
  │       │   ├── route.ts          # GET (list), POST (create)
  │       │   └── [id]/route.ts     # GET, PUT, DELETE (single)
  │       ├── check-prices/         # Price verification
  │       │   └── route.ts
  │       ├── publish-scheduled/    # Publish scheduled calls
  │       │   └── route.ts
  │       ├── check-events/         # Check stock events
  │       │   └── route.ts
  │       ├── stock-price/          # Fetch single stock price
  │       │   └── route.ts
  │       ├── nse-stocks/           # NSE stock list
  │       │   └── route.ts
  │       ├── stock-events/         # Stock event info
  │       │   └── route.ts
  │       ├── announcements/        # Announcement CRUD
  │       │   └── route.ts
  │       ├── public-preview/       # Preview data for non-users
  │       │   └── route.ts
  │       ├── config/               # App configuration
  │       │   └── route.ts
  │       ├── auth/                 # Admin authentication
  │       │   ├── login/route.ts
  │       │   ├── logout/route.ts
  │       │   ├── me/route.ts
  │       │   ├── forgot-password/route.ts
  │       │   └── reset-password/route.ts
  │       └── users/                # User management
  │           ├── route.ts          # List/approve users
  │           ├── register/route.ts
  │           ├── login/route.ts
  │           ├── reset-password/route.ts
  │           └── [id]/route.ts     # Update/delete user
  │
  ├── components/                   # React Components
  │   ├── CallCard.tsx              # Display single trading call
  │   ├── CallEntryForm.tsx         # Form to create/edit calls
  │   ├── PublicPreview.tsx         # Preview for non-users
  │   ├── LaunchCountdown.tsx       # Countdown timer
  │   ├── LaunchCelebration.tsx     # Launch animation
  │   ├── AnnouncementTicker.tsx    # Scrolling announcements
  │   ├── AnnouncementManager.tsx   # Admin: manage announcements
  │   ├── SearchableStockDropdown.tsx # Stock symbol autocomplete
  │   ├── Disclaimer.tsx            # Trading disclaimer
  │   └── FAQModal.tsx              # Help/FAQ modal
  │
  ├── lib/                          # Utility Libraries
  │   ├── prisma.ts                 # Prisma client singleton
  │   ├── stockApi.ts               # Yahoo Finance API wrapper
  │   ├── auth.ts                   # JWT auth helpers
  │   ├── launchDay.ts              # Launch date logic
  │   └── nse-stocks.ts             # NSE stock symbols data
  │
  ├── prisma/                       # Database
  │   ├── schema.prisma             # Database schema
  │   ├── seed.ts                   # Seed data script
  │   ├── dev.db                    # Local SQLite (dev only)
  │   └── migrations/               # Migration history
  │
  ├── scripts/                      # Automation Scripts
  │   ├── check-prices.ts           # Manual price check
  │   ├── expire-swing-trades.ts    # Auto-expire old swings
  │   ├── update-all-prices.ts      # Bulk price update
  │   ├── setup-cron.sh             # Cron setup helper
  │   ├── add-test-calls.ts         # Generate test data
  │   ├── migrate-hit-dates.ts      # Data migration script
  │   └── fix-inconsistent-data.ts  # Data cleanup
  │
  ├── public/                       # Static Assets
  │
  ├── package.json                  # Dependencies
  ├── tsconfig.json                 # TypeScript config
  ├── tailwind.config.js            # Tailwind configuration
  ├── next.config.js                # Next.js configuration
  ├── vercel.json                   # Vercel deployment config
  ├── .env.local                    # Environment variables
  └── README.md                     # Documentation

  ---
  🗄️ Database Schema

  TradingCall (Main entity)

  {
    id: UUID
    createdAt, updatedAt: DateTime
    callDate: DateTime

    // Stock info
    scriptName: String           // e.g., "RELIANCE"
    ltp: Float                   // Entry price

    // Targets
    target1, target2, target3: Float
    stopLoss: Float

    // Classification
    patternType: String          // TR, UB, BF, etc.
    tradeType: String            // SWING or LONG_TERM
    isFlashCard: Boolean         // Priority display
    eventMarker: String?         // E for events
    topPick: Int?                // Ranking 1, 2, 3...
    rank: Int?                   // 1-10

    // Levels
    support, resistance: Float?
    longTermOutlook: String?

    // Status tracking
    status: String               // ACTIVE, TARGET1_HIT, etc.
    currentPrice: Float?
    lastChecked: DateTime?

    // Hit tracking
    target1Hit, target2Hit, target3Hit: Boolean
    stopLossHit: Boolean
    target1HitDate, target2HitDate, target3HitDate: DateTime?
    stopLossHitDate: DateTime?

    // Scheduling
    scheduledFor: DateTime?      // 8:45 AM publishing
    isPublished: Boolean
  }

  User (Member management)

  {
    id, username, email, password: String
    fullName, phone: String
    status: String               // PENDING, APPROVED, REJECTED
    isActive: Boolean
    subscriptionStart, subscriptionEnd: DateTime?
    approvedBy, notes: String?
    lastLogin: DateTime?
  }

  Announcement

  {
    id, message: String
    isActive: Boolean
    createdAt, updatedAt: DateTime
  }

  PasswordResetToken

  {
    id, token, userId: String
    expiresAt: DateTime
    used: Boolean
  }

  AppConfig (Key-value store)

  {
    id, key, value: String
    updatedAt: DateTime
  }

  ---
  🏗️ Architecture

  Frontend Architecture

  - Client-Side Rendering (CSR): Main dashboard uses 'use client'
  - Server Components: Where possible for SEO
  - State Management: React useState/useEffect
  - API Communication: Fetch API with JSON

  Backend Architecture

  - Serverless Functions: Each API route is a serverless function
  - Edge-Compatible: Runs on Vercel's Edge Network
  - Authentication:
    - Admin: JWT tokens stored in httpOnly cookies
    - Users: JWT tokens in cookies + session management
  - Authorization: Middleware checks in API routes

  Data Flow

  User → Next.js Page → API Route → Prisma → PostgreSQL
                                        ↓
                                 Yahoo Finance API

  Automated Jobs

  1. Price Checking (check-prices.ts):
    - Runs every 5 hours (configurable)
    - Fetches current prices from Yahoo Finance
    - Updates target/SL hit status
    - Timestamps each hit
  2. Scheduled Publishing (publish-scheduled.ts):
    - Runs every hour
    - Checks for calls scheduled at current time
    - Publishes draft calls
  3. Trade Expiration (expire-swing-trades.ts):
    - Marks old swing trades as expired
    - Keeps long-term trades active

  ---
  🔐 Security Features

  1. Password Hashing: bcryptjs with salt rounds
  2. JWT Authentication: Secure tokens with expiration
  3. httpOnly Cookies: Prevent XSS attacks
  4. Environment Variables: Sensitive data in .env.local
  5. Role-Based Access: Admin vs User permissions
  6. API Protection: Auth checks on sensitive endpoints
  7. SQL Injection Protection: Prisma parameterized queries

  ---
  🚀 Deployment

  Hosting: Vercel

  - Build Command: prisma generate && next build
  - Auto-deploys: On git push to main branch
  - Environment: Serverless functions
  - Edge Network: Global CDN

  Database: PostgreSQL

  - Provider: Vercel Postgres (or any PostgreSQL)
  - Connection Pooling: For scalability
  - Direct URL: For migrations

  Environment Variables (Production)

  DATABASE_URL=postgresql://...
  DATABASE_POSTGRES_URL_NON_POOLING=postgresql://...
  ADMIN_USERNAME=admin
  ADMIN_PASSWORD=<secure-password>
  SESSION_SECRET=<random-secret>
  RESEND_API_KEY=<email-api-key>
  CHECK_INTERVAL_HOURS=5

  ---
  📱 Key Pages & Components

  Main Dashboard (app/page.tsx)

  - Trading calls list with filters
  - Calendar date picker
  - Status filters
  - Admin controls (when logged in)
  - Public preview mode

  CallCard (components/CallCard.tsx)

  - Displays single trading call
  - Visual status indicators
  - Target progress tracking
  - Hit timestamps
  - Flash card styling
  - Admin actions (edit/delete)

  CallEntryForm (components/CallEntryForm.tsx)

  - Create/edit trading calls
  - Searchable stock dropdown (NSE symbols)
  - Date/time scheduling
  - Flash card toggle
  - Pattern type selection

  User Management (app/manage-users/page.tsx)

  - Approve/reject registrations
  - Set subscription dates
  - Manage user status
  - Admin notes

  ---
  🔧 Scripts & Automation

  | Script                 | Purpose                 | Execution     |
  |------------------------|-------------------------|---------------|
  | check-prices.ts        | Verify targets/SL       | Cron (hourly) |
  | publish-scheduled.ts   | Auto-publish calls      | Cron (hourly) |
  | expire-swing-trades.ts | Mark old trades expired | Cron (daily)  |
  | update-all-prices.ts   | Bulk price refresh      | Manual        |
  | setup-cron.sh          | Configure cron jobs     | Setup         |

  ---
  📊 API Endpoints Summary

  Trading Calls

  - GET /api/calls - List with filters
  - POST /api/calls - Create call (admin)
  - GET /api/calls/[id] - Single call
  - PUT /api/calls/[id] - Update (admin)
  - DELETE /api/calls/[id] - Delete (admin)

  Prices & Data

  - POST /api/check-prices - Manual price check
  - GET /api/stock-price?symbol=RELIANCE - Single stock
  - GET /api/nse-stocks - Stock list

  Authentication

  - POST /api/auth/login - Admin login
  - POST /api/users/login - User login
  - GET /api/auth/me - Current user
  - POST /api/auth/logout - Logout

  User Management

  - POST /api/users/register - Registration
  - GET /api/users - List users (admin)
  - PUT /api/users/[id] - Approve/manage (admin)

  ---
  🎨 UI/UX Features

  - Responsive Design: Mobile-first Tailwind CSS
  - Dark Mode Ready: CSS variables prepared
  - Loading States: Skeleton screens
  - Error Handling: User-friendly messages
  - Animations: Smooth transitions
  - Icons: Lucide React icon library
  - Toast Notifications: Success/error feedback
  - Modal Dialogs: FAQ, disclaimers, forms

  ---

project no 3 : 

project no 4 :Horoscopebook

  Frontend (Landing Page):
  https://astrovastushrivmjoshi.com/horoscopebook/

  Backend API:
  https://astrology-landing-page.onrender.com

  The frontend is hosted on Hostinger at the /horoscopebook/ path, and the backend is deployed on Render.com as a separate service.

> wher is backed hosted? 

⏺ Based on the deployment instructions and configuration files, the backend is hosted on Render.com.

  Backend URL: https://astrology-landing-page.onrender.com

  The backend is deployed as a Node.js web service on Render (as configured in render.yaml:1-5), running in the Singapore region on
  their free tier plan.



Backend Technologies

  Core Framework:
  - Node.js (v16+) - JavaScript runtime
  - Express.js (v4.18.2) - Web application framework

  Key Backend Libraries:
  - Razorpay (v2.9.2) - Payment gateway integration
  - Axios (v1.6.0) - HTTP client for API requests
  - dotenv (v16.3.1) - Environment variable management
  - Helmet (v7.1.0) - Security headers
  - Morgan (v1.10.0) - HTTP request logging
  - CORS (v2.8.5) - Cross-Origin Resource Sharing
  - Body-parser (v1.20.2) - Request body parsing
  - UUID (v9.0.1) - Unique ID generation

  Frontend Technologies

  UI/UX:
  - Vanilla HTML5/CSS3/JavaScript - No framework overhead
  - Font Awesome (v6.4.0) - Icon library
  - Google Fonts - Inter & Playfair Display fonts
  - Responsive Design - Mobile-first approach

  Frontend Integrations:
  - Razorpay Checkout.js - Payment UI widget
  - EmailJS (v4) - Email notification service

  Third-Party Integrations

  1. Payment Processing:
    - Razorpay live payments (rzp_live_ReKrWIrOgXhFIS)
    - Webhook-based payment verification
    - Signature validation for security
  2. Shipping:
    - Shiprocket API - Automated shipping for physical products
    - Serviceability checking
    - AWB tracking
  3. Data Management:
    - Google Sheets API - Order logging via Apps Script
    - Custom Google Apps Script webhook (google-sheets-script.js)
  4. Communication:
    - EmailJS - Customer & admin email notifications
    - WhatsApp API - Configured for messaging integration

  Key Features

  Order Management:
  - RESTful API endpoints (/api/orders/*)
  - Order creation and tracking
  - Status management (created, paid, completed, failed)
  - Package types: PDF (digital) and Print (physical)

  Payment Flow:
  - Order creation → Razorpay payment → Webhook confirmation
  - Signature verification for security
  - Automatic shipment creation for print orders

  Shipping & Tracking:
  - Shiprocket integration (/api/shipments/*)
  - Delivery serviceability checks
  - AWB-based tracking
  - Order status tracking (/api/tracking/*)

  Security Features:
  - Helmet.js security headers
  - Content Security Policy (CSP)
  - CORS protection with whitelisted domains
  - Webhook signature verification
  - Environment variable protection
  - Request logging

  Data Persistence:
  - JSON file-based storage in /data/ directory:
    - orders.json - Order database
    - payment_logs.json - Payment history
    - shiprocket_logs.json - Shipping logs

  Deployment Ready:
  - Heroku/DigitalOcean/AWS compatible
  - Environment-based configuration
  - Health check endpoint (/health)
  - Graceful shutdown handling
  - PM2 process management support

  Architecture

  Multi-domain Setup:
  - Production: astrovastushrivmjoshi.com
  - Development: localhost:3000
  - Static file serving for frontend
  - Separated concerns (routes directory)

  API Endpoints:
  - /api/orders/* - Order management
  - /api/webhooks/* - Payment webhooks
  - /api/shipments/* - Shipping operations
  - /api/tracking/* - Order tracking

  This is a production-ready, full-stack e-commerce solution for selling personalized astrology reports (digital & physical) with
  integrated payment, shipping, and customer communication systems.

project no 5 : Shakti Kit
🏗️ Core Technology Stack

  Frontend Framework

  - React 18.3.1 - Modern React with TypeScript
  - TypeScript 5.5.3 - Type-safe JavaScript development
  - Vite 5.4.2 - Lightning-fast build tool and dev server
  - ES Modules - Modern JavaScript module system

  Styling & UI

  - Tailwind CSS 3.4.1 - Utility-first CSS framework
  - PostCSS 8.4.35 - CSS processing with Autoprefixer
  - Lucide React 0.344.0 - Modern icon library
  - Custom animations - CSS-based animations and transitions

  Backend Architecture

  - Netlify Serverless Functions - AWS Lambda-based serverless backend
  - Node.js with ES Modules
  - esbuild - Function bundler for optimal performance

  💳 Payment & E-Commerce Integration

  Payment Gateway

  - Razorpay SDK 2.9.2 - Indian payment processor
  - Server-side order creation and verification
  - Webhook support for payment confirmation
  - Test/live mode support

  Shipping Integration

  - Shiprocket API - Automated shipping and logistics
  - Automatic order creation after successful payment
  - Pickup location management
  - Shipment tracking

  📊 Analytics & Tracking

  Tracking Platforms

  - Google Tag Manager (GTM) - Tag management system (ID: GTM-5PQJQD3K)
  - Google Analytics 4 - Web analytics (ID: G-QFMK3671DZ)
  - Meta Pixel (Facebook) - Conversion tracking (ID: 1410579660740598)

  Meta Conversions API

  - Custom implementation in src/utils/metaEvents.ts:1
  - Server-side + client-side event tracking
  - Event deduplication with unique IDs
  - User data persistence (localStorage)
  - Facebook parameter tracking (fbc, fbp, fbclid)

  🎨 Key Features & Components

  UI Components (Located in src/components/)

  1. Navbar.tsx - Navigation header
  2. HeroSection.tsx - Landing hero with CTA
  3. ParticleBackground.tsx - Animated background
  4. ProblemSection.tsx - Problem statement
  5. ScrollytellingSection.tsx - Scroll-based storytelling
  6. SolutionSection.tsx - Product solution
  7. BenefitsSection.tsx - Benefits showcase
  8. RitualSection.tsx - Usage instructions
  9. GuideSection.tsx - User guide
  10. ReviewsSection.tsx - Customer testimonials
  11. CTASection.tsx - Call-to-action
  12. PaymentModal.tsx - Payment form and Razorpay integration
  13. MobileStickyOrder.tsx - Mobile-optimized sticky order button
  14. AnimatedSection.tsx - Reusable animation wrapper

  Backend Functions (Located in backend/functions/)

  1. create-order.js - Creates Razorpay payment order
  2. verify-payment.js - Verifies payment signature & creates Shiprocket order
  3. payment-webhook.js - Handles Razorpay webhooks

  🔧 Build & Development Tools

  Development

  - Netlify CLI - Local development environment
  - ESLint 9.9.1 - Code linting with React hooks plugin
  - TypeScript ESLint - TypeScript-specific linting

  HTTP Client

  - Axios 1.6.0 - Promise-based HTTP client for API calls

  Media Players

  - React Player 3.3.1 - Video player component
  - React YouTube 10.1.0 - YouTube embed support

  🚀 Deployment Configuration

  Hosting Setup

  - Frontend: Hostinger (static files from /dist)
  - Backend: Netlify (serverless functions)
  - Base Path: /shaktikit/ for subdirectory deployment (vite.config.ts:17)

  Netlify Configuration (netlify.toml)

  - Build command: npm run build
  - Publish directory: dist
  - Function bundler: esbuild
  - API routing: /api/* → /.netlify/functions/*
  - SPA fallback: All routes → /index.html

  🔐 Security Features

  1. Environment Variables - Secrets stored securely
  2. HTTPS Enforcement - Secure connections
  3. Payment Signature Verification - Razorpay signature validation
  4. Webhook Signature Verification - Authentic webhook validation
  5. CORS Protection - Cross-origin request filtering
  6. Input Validation - Form data sanitization

  📦 Project Structure

  Shakti-kit/
  ├── src/                        # React frontend
  │   ├── components/             # 15 React components
  │   ├── utils/                  # Meta events utilities
  │   ├── App.tsx                 # Main app component
  │   └── main.tsx                # React entry point
  ├── backend/                    # Serverless backend
  │   ├── functions/              # 3 Netlify functions
  │   └── utils/                  # Razorpay & Shiprocket utils
  ├── public/                     # Static assets
  ├── dist/                       # Production build output
  └── netlify/functions/          # Deployed functions

  🎯 Key Technical Highlights

  1. Serverless Architecture - No server management, scales automatically
  2. Type Safety - Full TypeScript coverage
  3. Performance Optimized - Vite for fast builds, esbuild for functions
  4. SEO Ready - Meta tags, proper HTML structure
  5. Mobile First - Responsive design with mobile-specific components
  6. Analytics Integration - Dual-tracking (client + server) for Meta Pixel
  7. Payment Security - Industry-standard verification
  8. Automated Fulfillment - Shiprocket integration for order processing

  💰 Cost Structure

  - Hostinger: ₹100-300/month (static hosting)
  - Netlify: Free tier (100k function requests/month)
  - Razorpay: 2% per transaction
  - Shiprocket: Per-shipment variable cost

  This is a modern, production-ready e-commerce platform built with best practices for performance, security, and scalability!
🏗️ Core Architecture

  Netlify Serverless Functions (AWS Lambda)
  - No traditional server needed
  - Auto-scales based on traffic
  - Pay per request (Free tier: 125k requests/month)
  - Runs on AWS infrastructure

  💻 Runtime & Language

  - Node.js with ES Modules (type: "module")
  - Modern JavaScript (import/export syntax)
  - Built on AWS Lambda runtime

  📦 Key Dependencies

  1. Razorpay SDK 2.9.2
    - Official Razorpay Node.js library
    - Handles payment order creation
    - Payment signature verification
    - Uses Node.js crypto module for security
  2. Axios 1.6.0
    - HTTP client for API calls
    - Used for Shiprocket API integration
    - Promise-based requests
  3. dotenv 16.3.1
    - Environment variable management
    - Secures API keys and credentials

  🔧 Backend Structure

  3 Serverless Functions:

  1. create-order.js (backend/functions/create-order.js:1)
    - Creates Razorpay payment orders
    - Validates customer details
    - Returns order ID to frontend
  2. verify-payment.js
    - Verifies Razorpay payment signature
    - Creates Shiprocket shipping orders
    - Links payment to shipment
  3. payment-webhook.js
    - Handles Razorpay webhooks
    - Listens for payment status updates
    - Automated event processing

  2 Utility Modules:

  1. razorpay.js (backend/utils/razorpay.js:1)
    - Razorpay API wrapper class
    - Order creation logic
    - Signature verification using HMAC-SHA256
  2. shiprocket.js (backend/utils/shiprocket.js:1)
    - Shiprocket API wrapper class
    - Token-based authentication
    - Order creation and tracking

  🚀 Deployment

  - Platform: Netlify (Free tier)
  - Bundler: esbuild (configured in netlify.toml)
  - Endpoint: /.netlify/functions/[function-name]
  - Auto-deploy: Commits trigger automatic deployment

  🔐 Security Features

  - CORS configuration
  - Cryptographic signature verification (HMAC-SHA256)
  - Environment variables for secrets
  - Webhook signature validation

  💰 Cost

  FREE - Netlify Functions free tier includes:
  - 125,000 requests/month
  - 100 hours runtime/month
  - More than enough for this e-commerce site

  In summary: Your backend is a modern serverless architecture running on Node.js with Netlify Functions, integrating Razorpay payments and Shiprocket 
  shipping - all w

project no 6 : Quick venue 

Based on my analysis of your project, here's the complete technology stack for BookMyEvent:

  Frontend

  Framework & Libraries:
  - React 19.2.1 - UI framework
  - React Router DOM 7.10.1 - Client-side routing
  - React Scripts 5.0.1 - Build tooling (Create React App)

  Styling:
  - Tailwind CSS 3.4.18 - Utility-first CSS framework
  - PostCSS & Autoprefixer - CSS processing

  UI Components & Icons:
  - Lucide React 0.561.0 - Icon library
  - @react-google-maps/api 2.20.7 - Google Maps integration

  Data Visualization:
  - Recharts 3.5.1 - Charts and graphs

  Utilities:
  - Axios 1.13.2 - HTTP client
  - date-fns 4.1.0 - Date manipulation
  - jsPDF 3.0.4 + jsPDF-AutoTable 5.0.2 - PDF generation
  - react-to-print 3.2.0 - Print functionality
  - xlsx 0.18.5 - Excel file handling

  Testing:
  - @testing-library/react, jest-dom, user-event - Testing utilities

  ---
  Backend

  Framework:
  - Django 5.0 - Python web framework
  - Django REST Framework 3.14.0 - REST API toolkit
  - Python 3.13.0

  Authentication:
  - djangorestframework-simplejwt 5.3.1 - JWT authentication
  - PyJWT 2.10.1 - JWT tokens

  API Documentation:
  - drf-yasg 1.21.7 - Swagger/OpenAPI documentation

  Middleware & Extensions:
  - django-cors-headers 4.3.1 - CORS support
  - django-filter 23.5 - Filtering for querysets
  - WhiteNoise 6.6.0 - Static file serving

  Image Processing:
  - Pillow 11.0.0 - Image handling

  Web Server:
  - Gunicorn 21.2.0 - WSGI HTTP server

  Configuration:
  - python-decouple 3.8 - Environment variable management
  - dj-database-url 3.0.1 - Database URL parsing

  ---
  Database

  Development:
  - SQLite (db.sqlite3) - Local development database

  Production:
  - PostgreSQL (via Neon) - Cloud PostgreSQL database
  - psycopg2-binary 2.9.11 - PostgreSQL adapter

  ---
  Hosting & Deployment

  Frontend Hosting:
  - Vercel - React frontend deployment
    - Custom domain support
    - Automatic builds from Git
    - Environment variables configured

  Backend Hosting:
  - Render.com - Django backend deployment
    - Free tier (0.1 CPU, 512 MB RAM)
    - Auto-sleep after 15 minutes inactivity
    - Automatic deployments from Git

  Database Hosting:
  - Neon - Serverless PostgreSQL
    - 0.5 GB storage (free tier)
    - Always available
    - Connection pooling enabled

  Alternative Setup (Documented):
  - Hostinger VPS with Nginx + Gunicorn + Systemd

  ---
  Development Tools

  Version Control:
  - Git - Source control
  - GitHub - Repository hosting

  Build Tools:
  - npm - Package management
  - Webpack (via react-scripts) - Module bundler

  Environment:
  - Node.js - JavaScript runtime
  - Python Virtual Environment (venv)

  ---
  Third-Party Services

  Maps:
  - Google Maps JavaScript API - Location and maps functionality

  APIs:
  - REST API architecture
  - JWT token-based authentication
  - Swagger documentation at /swagger/

  ---
  Architecture

  Pattern:
  - Multi-tenant SaaS architecture
  - Custom middleware for tenant isolation
  - RESTful API design

  Security:
  - JWT authentication
  - CORS configured
  - HTTPS/SSL in production
  - CSRF protection
  - Secure cookies
  - Password validation

  Features:
  - Role-based access control (Super Admin, Hall Admin, Public)
  - Real-time availability checking
  - Payment tracking
  - Revenue analytics
  - Mobile-responsive design

  ---

  
project no 7 : Homa Booking System - Technical Features & Technologies

  🏗️ Architecture & Framework

  Frontend Framework

  - React 18.2.0 - Modern React with hooks and functional components
  - Single Page Application (SPA) architecture
  - Component-based architecture for modularity and reusability

  Build Tools

  - React Scripts 5.0.1 (Create React App)
  - Webpack (bundled with CRA)
  - Babel for JavaScript transpilation

  ---
  🎨 UI/UX Technologies

  Material-UI (MUI) v5

  - @mui/material - Core component library
  - @mui/icons-material - Material Design icons
  - @emotion (styled-components engine)
  - Custom theme with Indian cultural colors (Maroon, Deep Blue)
  - Responsive design for mobile and desktop

  Date & Time Management

  - @mui/x-date-pickers - Advanced date picker components
  - date-fns - Modern date utility library
  - react-big-calendar - Full-featured calendar view with month/week/day views

  ---
  🔥 Backend & Database

  Firebase (Backend-as-a-Service)

  - Firebase v10.1.0
  - Cloud Firestore - NoSQL real-time database
    - Collections: bookings, purohits
    - Real-time data synchronization
    - Queries with filtering, sorting, and pagination
  - Firebase Authentication - User authentication system
  - Firebase Hosting ready (configured for deployment)

  ---
  📊 Data Visualization & Reports

  Chart Library

  - Recharts 2.7.2 - React-based charting library
    - Bar charts, pie charts, line graphs
    - Responsive visualizations

  Export Capabilities

  - jsPDF 2.5.1 - PDF generation
  - jspdf-autotable 3.5.31 - Table generation in PDFs
  - xlsx 0.18.5 - Excel file generation
  - Export formats: Excel (.xlsx), PDF
  - Report types:
    - Individual booking details
    - Monthly reports
    - Purohit-wise reports
    - Custom filtered reports

  ---
  🔔 Notification System

  WhatsApp Integration

  - Manual WhatsApp Web integration (opens WhatsApp with pre-filled messages)
  - Bulk reminder system for upcoming bookings
  - Message templates:
    - Booking confirmation messages
    - Reminder messages (sent 1 day before)
  - Ready for MSG91/Twilio integration (code templates included)

  Planned Integration Support

  - Twilio SMS/WhatsApp API
  - WhatsApp Business Cloud API (Meta)
  - MSG91 API

  ---
  🌟 Core Features

  1. Booking Management

  - Create, read, update, delete (CRUD) bookings
  - Date and time slot selection
  - Multiple homa types (45+ types of Hindu ceremonies)
  - Purohit assignment
  - Client information management
  - Financial tracking (total, advance, balance)
  - Status tracking (pending, booked, completed, cancelled)

  2. Calendar View

  - Interactive monthly calendar
  - Visual booking indicators
  - Panchanga integration (Hindu calendar):
    - Tithi (lunar day)
    - Nakshatra (lunar mansion)
    - Vāra (weekday deity)
    - Yoga
    - Karana
    - Auspicious day indicators
  - Click on dates to view bookings

  3. Multi-User Role System

  - Admin - Full access
  - Bhadaji - Restricted access (no phone/financial data)
  - Purohit - View only assigned bookings, submit charges
  - Role-based UI rendering
  - LocalStorage-based session management

  4. Financial Management

  - Total amount tracking
  - Advance payment recording
  - Balance due calculation
  - Purohit charges tracking
  - Monthly financial reports
  - Revenue analytics

  5. Purohit Management

  - Multiple purohit profiles
  - Assignment tracking
  - Performance reports
  - Workload distribution

  6. Reports & Analytics

  - Monthly booking statistics
  - Status-wise breakdown
  - Purohit-wise performance
  - Revenue analysis
  - Export to Excel/PDF

  ---
  🧘 Domain-Specific Features

  Hindu Religious Features

  - 45+ Homa/Havana types:
    - Planetary remedies (Shani Shanti, Mangal Shanti)
    - Nakshatra Shanti ceremonies
    - Yoga Shanti
    - Special occasions (Kalasarpa, Vastu)
  - Sankalpa management (intentions):
    - Wealth (Laxmi Kuber)
    - Education (Saraswati)
    - Marriage (Swayamvar Parvati)
    - Children (Santan Prapti)
    - Job/Career
  - Panchanga service:
    - Real-time lunar calendar calculations
    - Auspicious date detection
    - Special day identification (Ekadashi, Purnima, etc.)

  ---
  🔐 Security & Authentication

  - Firebase Authentication
  - Role-based access control
  - LocalStorage for session persistence
  - Environment variables for API keys (needs improvement - currently exposed)

  ---
  📱 Responsive Design

  - Mobile-first approach
  - Breakpoints: xs, sm, md, lg, xl
  - Touch-friendly interface
  - Optimized for tablets and phones

  ---
  🚀 Deployment & Hosting

  - Configured for Firebase Hosting
  - Base path: /booking-homa
  - Production build optimization
  - PWA-ready (has manifest.json)

  ---
  🛠️ Development Tools

  Router

  - React Router DOM v6 - Client-side routing

  Code Organization

  src/
  ├── components/     # Reusable UI components
  ├── pages/          # Main page views
  ├── services/       # Business logic & API calls
  ├── config/         # Configuration files
  └── utils/          # Utility functions

  ---
  📊 Data Flow Architecture

  1. React Components → UI layer
  2. Service Layer (bookingService.js, etc.) → Business logic
  3. Firebase SDK → API communication
  4. Cloud Firestore → Database

  ---
  🔄 State Management

  - React Hooks (useState, useEffect)
  - Props drilling for component communication
  - LocalStorage for authentication state
  - No external state management library (Redux/MobX not used)

  ---
  🌐 Browser Support

  - Modern browsers (Chrome, Firefox, Safari, Edge)
  - ES6+ features
  - No IE11 support

  ---
  📈 Performance Features

  - Code splitting via React lazy loading (ready)
  - Optimized production builds
  - Efficient Firestore queries with indexing
  - Pagination ready for large datasets

  ---
  🔧 Potential Improvements

  1. Security: Move Firebase config to environment variables
  2. WhatsApp: Integrate proper API (MSG91/Twilio) instead of manual web opening
  3. Authentication: Add password reset, email verification
  4. Offline Mode: Add service worker for PWA
  5. Testing: Add unit tests with Jest/React Testing Library
  6. State Management: Consider Redux/Zustand for complex state

  ---

Project no 8 : MrCakeBakers - Technical Documentation                                                                                            
                                                                                                                                    
  🏗️ Architecture Overview                                                                                                          ─
                                                                                                                                    
  Full-Stack E-commerce Bakery Platform built with modern web technologies                                                          
                                                                                                                                    
  ---                                                                                                                               
  🎨 Frontend Technologies

  Core Framework

  - Next.js 16.1.1 (React 19.0.0)
    - App Router (Server Components & Client Components)
    - Server-Side Rendering (SSR)
    - Static Site Generation (SSG)
    - API Routes
    - Turbopack for faster development

  UI & Styling

  - Tailwind CSS 3.4.17 - Utility-first CSS framework
  - PostCSS & Autoprefixer - CSS processing
  - Framer Motion 11.15.0 - Animation library
  - Lucide React - Icon library (clean, modern icons)

  State Management

  - Zustand 5.0.2 - Lightweight state management
  - React Server Components for server state

  Forms & Validation

  - Zod 4.3.5 - TypeScript-first schema validation

  Maps

  - Leaflet 1.9.4 - Interactive maps
  - React Leaflet 5.0.0 - React wrapper for Leaflet

  Charts & Analytics

  - Recharts 3.7.0 - Chart library for data visualization

  PWA Support

  - Next-PWA 5.6.0 - Progressive Web App capabilities
    - Offline support
    - App-like experience
    - Install to home screen

  ---
  ⚙️ Backend Technologies

  Runtime & Framework

  - Node.js (TypeScript 5.7.2)
  - Next.js API Routes - Serverless functions

  Authentication

  - NextAuth.js 5.0.0 (beta) - Authentication solution
    - Email/Password authentication
    - JWT sessions
    - Role-based access control (ADMIN, CUSTOMER, DELIVERY_PARTNER)
    - bcryptjs 2.4.3 - Password hashing

  ORM & Database Client

  - Prisma 6.1.0 - Next-generation ORM
    - Type-safe database queries
    - Auto-generated TypeScript types
    - Migration system
    - Seeding support

  ---
  🗄️ Database

  Database System

  - CockroachDB (PostgreSQL-compatible)
    - Distributed SQL database
    - Cloud-hosted
    - ACID compliance
    - Horizontal scaling

  Database Schema

  Core Models

  1. User - Customer & admin accounts
    - Authentication (email, password)
    - Profile (name, phone, image)
    - Role-based permissions
    - Birthday tracking
  2. DeliveryPartner - Delivery personnel
    - Authentication & profile
    - Vehicle information
    - Delivery statistics
  3. Product - Bakery items catalog
    - Multiple images support
    - Category relationship
    - Stock management
    - Featured products
    - Detailed specs (weight, servings, ingredients, allergens)
  4. Category - Product categories
    - Slug-based routing
  5. Order - Customer orders
    - Order lifecycle tracking
    - Status history
    - Payment integration
    - Delivery scheduling
    - GPS coordinates for delivery
  6. OrderItem - Order line items
    - Product details
    - Customization support
  7. Address - Customer addresses
    - Multiple addresses per user
    - GPS coordinates (lat/lng)
  8. Review - Product reviews
    - Star ratings
    - Comments
  9. Wishlist - Saved products
  10. SpecialDay - Birthday/Anniversary tracking
  11. SiteSettings - Site configuration
    - Active hero variant selection
    - System-wide settings

  ---
  🚀 Key Features

  E-commerce Features

  - ✅ Product catalog with filtering & search
  - ✅ Shopping cart & wishlist
  - ✅ Multi-step checkout process
  - ✅ Order tracking & status updates
  - ✅ Product reviews & ratings
  - ✅ Featured products section
  - ✅ Category-based browsing

  User Features

  - ✅ User registration & login
  - ✅ Profile management
  - ✅ Multiple delivery addresses
  - ✅ Order history
  - ✅ Birthday & special day reminders

  Admin Features

  - ✅ Full admin dashboard
  - ✅ Product management (CRUD)
  - ✅ Order management
  - ✅ User management
  - ✅ Delivery partner management
  - ✅ Hero section selector (NEW!)
  - ✅ Store settings configuration
  - ✅ Inventory tracking
  - ✅ Sales analytics

  Delivery Features

  - ✅ Delivery partner dashboard
  - ✅ Real-time order assignment
  - ✅ GPS tracking (agent location)
  - ✅ Delivery status updates
  - ✅ Route optimization support

  Design System

  - ✅ Multiple Hero Variants
    - Light theme (traditional bakery)
    - Dark theme (modern/premium)
    - Admin-controlled switching
  - ✅ Responsive design (mobile-first)
  - ✅ Custom color scheme (bakery theme)
  - ✅ Consistent UI components
  - ✅ Loading states & animations

  ---
  📦 Development Tools

  TypeScript

  - TypeScript 5.7.2
  - Strict type checking
  - Auto-completion & IntelliSense

  Code Quality

  - ESLint 9.18.0 - Linting
  - eslint-config-next - Next.js ESLint rules

  Image Processing

  - Sharp 0.34.5 - High-performance image processing

  Build Tools

  - Turbopack (Next.js built-in)
  - PostCSS 8.4.49
  - Autoprefixer 10.4.23

  ---
  🔒 Security Features

  1. Authentication
    - Password hashing with bcrypt
    - JWT-based sessions
    - Secure HTTP-only cookies
  2. Authorization
    - Role-based access control (RBAC)
    - Protected API routes
    - Admin-only pages
  3. Data Validation
    - Zod schema validation
    - Input sanitization
    - Type-safe queries with Prisma

  ---
  🌐 API Architecture

  RESTful API Routes

  /api/admin/settings/hero - Hero selection management
  /api/auth/* - NextAuth endpoints
  /api/products/* - Product operations
  /api/orders/* - Order management
  /api/users/* - User management

  API Features

  - Server-side validation
  - Error handling
  - Authentication middleware
  - Role-based route protection

  ---
  📱 Progressive Web App (PWA)

  - Service worker for offline support
  - App manifest for installation
  - Cache strategies for assets
  - Push notifications ready

  ---
  🎯 Performance Optimizations

  1. Next.js Features
    - Image optimization (next/image)
    - Font optimization (next/font)
    - Code splitting
    - Route prefetching
    - Incremental Static Regeneration (ISR)
  2. Caching
    - unstable_cache for database queries
    - Revalidation strategies
    - Browser caching
  3. Database
    - Indexed queries
    - Connection pooling (Prisma)
    - Query optimization

  ---
  📂 Project Structure

  MrCakeBakers/
  ├── app/                    # Next.js App Router
  │   ├── api/               # API routes
  │   ├── admin/             # Admin dashboard pages
  │   ├── products/          # Product pages
  │   ├── cart/              # Shopping cart
  │   ├── checkout/          # Checkout flow
  │   └── page.tsx           # Homepage
  ├── components/            # React components
  │   ├── heroes/           # Hero section variants
  │   ├── Header.tsx        # Navigation
  │   └── Footer.tsx        # Footer
  ├── prisma/               # Database
  │   ├── schema.prisma     # Database schema
  │   └── seed.ts           # Seed data
  ├── lib/                  # Utilities
  │   ├── prisma.ts         # Prisma client
  │   └── utils.ts          # Helper functions
  ├── auth.ts               # NextAuth configuration
  └── tailwind.config.ts    # Tailwind configuration

  ---
  🔧 Environment Variables

  DATABASE_URL=           # CockroachDB connection
  NEXTAUTH_SECRET=        # Auth secret key
  NEXTAUTH_URL=          # App URL

  ---
  🚀 Deployment Ready

  - ✅ Vercel-optimized
  - ✅ Production build with npm run build
  - ✅ Database migrations
  - ✅ Environment-based configuration
  - ✅ Error tracking ready

  ---
  📊 Tech Stack Summary
  ┌────────────┬──────────────────────────────────┐
  │   Layer    │            Technology            │
  ├────────────┼──────────────────────────────────┤
  │ Frontend   │ Next.js 16, React 19, TypeScript │
  ├────────────┼──────────────────────────────────┤
  │ Styling    │ Tailwind CSS, Framer Motion      │
  ├────────────┼──────────────────────────────────┤
  │ Backend    │ Next.js API Routes, Node.js      │
  ├────────────┼──────────────────────────────────┤
  │ Database   │ CockroachDB (PostgreSQL)         │
  ├────────────┼──────────────────────────────────┤
  │ ORM        │ Prisma 6                         │
  ├────────────┼──────────────────────────────────┤
  │ Auth       │ NextAuth.js 5                    │
  ├────────────┼──────────────────────────────────┤
  │ State      │ Zustand, React Context           │
  ├────────────┼──────────────────────────────────┤
  │ Maps       │ Leaflet + React Leaflet          │
  ├────────────┼──────────────────────────────────┤
  │ Charts     │ Recharts                         │
  ├────────────┼──────────────────────────────────┤
  │ Validation │ Zod                              │
  ├────────────┼──────────────────────────────────┤
  │ PWA        │ next-pwa                         │
  ├────────────┼──────────────────────────────────┤
  │ Deployment │ Vercel-ready                     │
  └────────────┴──────────────────────────────────┘
  This is a production-ready, scalable e-commerce platform with modern best practices! 🎉


project no 9 : Reachuplearning Shashank  


Based on our work together, here's the complete tech stack for your Learn It Up SAP Training website:

  🛠️ Technologies & Frameworks

  Frontend:

  - HTML5 - Structure and markup
  - CSS3 - Styling with modern features:
    - CSS Variables for theming
    - Flexbox & CSS Grid for layouts
    - Glassmorphism effects
    - Smooth animations and transitions
    - Responsive design (mobile-first)
  - Vanilla JavaScript (ES6+) - All interactive functionality:
    - Carousel/slider for testimonials
    - Form validation
    - Dynamic content loading
    - Chat widget functionality
    - Smooth scrolling
    - Image upload with preview

  Backend:

  - Node.js - Runtime environment
  - Express.js - Web server framework
  - Nodemailer - Email sending functionality
    - Gmail SMTP for contact form notifications
  - Multer - File upload handling (for images in feedback)
  - CORS - Cross-origin resource sharing middleware

  Database:

  - Neon PostgreSQL - Serverless PostgreSQL database
    - Cloud-hosted on AWS (ap-southeast-1 region)
    - Connection via @neondatabase/serverless package
    - Tables:
        - feedback - stores student testimonials with images
      - course_materials - stores course PDFs and materials
      - contacts - stores contact form submissions
      - chat_signups - stores chat widget user data

  Hosting & Deployment:

  - Vercel - Frontend & Backend hosting
    - Serverless functions for API endpoints
    - Production URL: https://shashank-jet.vercel.app
    - Automatic HTTPS
    - CDN for fast global delivery
    - Environment variables for secrets

  Domain:

  - Custom Domain: https://www.reachupleaarningcenter.in
    - DNS configured to point to Vercel

  Version Control:

  - Git - Version control system
  - GitHub - Code repository hosting
    - Repository: shrinidhikatti/shashank

  Development Tools:

  - VS Code (likely your editor)
  - npm - Package manager
  - Vercel CLI - Deployment tool

  📦 NPM Packages Used:

  {
    "express": "^4.x",
    "nodemailer": "^6.x",
    "cors": "^2.x",
    "multer": "^1.x",
    "@neondatabase/serverless": "^0.x",
    "dotenv": "^16.x"
  }

  🗂️ Project Structure:

  shashank/
  ├── index.html              # Main homepage
  ├── styles.css              # Main stylesheet
  ├── script.js               # Main JavaScript
  ├── server.js               # Express backend server
  ├── public/                 # Public assets
  │   ├── index.html
  │   ├── styles.css
  │   ├── script.js
  │   ├── feedback.html       # Feedback form
  │   ├── admin-upload.html   # Admin panel
  │   └── course-materials.html
  ├── package.json
  ├── vercel.json            # Vercel configuration
  └── .env                   # Environment variables

  🎨 Design Features:

  - Glassmorphism UI - Frosted glass effect cards
  - Gradient backgrounds - Purple/blue theme
  - Responsive design - Works on desktop, tablet, mobile
  - Dark mode support - CSS variables for theming
  - Smooth animations - Fade-ins, slides, hover effects
  - Custom scrollbars - Styled for better UX

  🔐 Security:

  - Environment variables for sensitive data
  - Gmail App Password for email authentication
  - CORS configuration for API security
  - Input validation and sanitization
  - Base64 encoding for image storage

  📧 Email Configuration:

  - Service: Gmail SMTP
  - From: shashanksap06@gmail.com
  - To: shashanksaptrainer@gmail.com
  - Port: 587 (TLS)

  🌐 APIs & Endpoints:

  - GET /api/success-stories - Fetch testimonials
  - POST /api/success-stories - Add testimonial
  - DELETE /api/success-stories/:id - Delete testimonial
  - POST /api/feedback - Submit feedback with image
  - POST /api/contact - Contact form submission
  - POST /api/chat/signup - Chat widget signup
  - GET /api/course-materials - Fetch course materials

  This is a modern, production-ready JAMstack-style web application with serverless architecture! 🚀