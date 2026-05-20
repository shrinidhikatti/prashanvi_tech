


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

project no 3 : PRERANE - Education Management System

  ---
  🔧 Backend Technologies

  Framework & Core

  - Django 4.2+ - Python web framework (MVC architecture)
  - Python 3.x - Programming language
  - WSGI/ASGI - Web server gateway interface

  Database

  - SQLite3 - Development database (local)
  - PostgreSQL 14 - Production database (Google Cloud SQL)
    - Instance: assignment-tracker-db
    - Region: asia-south1
    - Tier: db-f1-micro

  Python Libraries

  - openpyxl 3.1.0+ - Excel file processing (.xlsx)
  - pandas 2.0.0+ - Data manipulation and analysis
  - whitenoise 6.5.0+ - Static file serving

  Authentication & Authorization

  - Django's built-in User model
  - Django Groups for role-based access control
  - Custom profile models: DDPIProfile, BEOProfile, PrincipalProfile
  - Password validators and security middleware

  ---
  🎨 Frontend Technologies

  UI Framework & Styling

  - Tailwind CSS (via CDN) - Utility-first CSS framework
  - Font Awesome 6.0 - Icon library
  - Custom Tailwind configuration with extended color palette

  Template Engine

  - Django Templates - Server-side rendering
  - Custom template tags (dict_extras)

  JavaScript

  - Vanilla JavaScript for interactive features
  - Mobile sidebar toggle functionality
  - Form interactions

  Design Features

  - Responsive design (mobile-first)
  - Glass morphism effects (backdrop-blur)
  - Gradient backgrounds
  - Modern UI with cards and dashboards

  ---
  📊 Key Features & Functionality

  Multi-Role System

  1. DDPI (Deputy Director of Public Instruction)
    - Manage talukas
    - Manage subjects
    - Manage BEOs
    - Create and manage assignments
    - District-level reports
  2. BEO (Block Education Officer)
    - Manage schools in their taluka
    - Manage principals
    - Taluka-level reports
  3. Principal
    - Manage students in their school
    - Evaluate student assignments
    - School-level reports

  Core Modules

  - District Management - District and Taluka hierarchies
  - School Management - School types, locations, mediums
  - Student Management - Student records with STS numbers
  - Assignment System - Create assignments with multiple tasks
  - Task Evaluation - Track SOLVED/UNSOLVED status per task
  - Reporting System - Generate Excel reports with statistics

  Data Models

  - District, Taluka, Subject, School, Student
  - Assignment with JSONField for tasks
  - TaskEvaluation for tracking progress
  - Role-based profiles (DDPI, BEO, Principal)

  ---
  🚀 Deployment & Infrastructure

  Hosting Platforms

  - Vercel - Primary deployment platform
  - Google Cloud Platform - Database hosting
    - Project: belagavi-assignment-tracker
    - Cloud SQL PostgreSQL instance

  Configuration

  - Multiple settings files:
    - settings.py - Development (SQLite)
    - settings_production.py - Production (PostgreSQL)
    - settings_local_to_prod.py - Migration settings
  - Environment variables for secrets
  - Vercel deployment configuration (vercel.json)

  Static Files

  - WhiteNoise for serving static files
  - Static files collection in staticfiles/
  - CDN for Tailwind CSS and Font Awesome

  ---
  📁 Project Structure

  FinalPrerane/
  ├── core/                           # Main Django app
  │   ├── models.py                   # Database models
  │   ├── views.py                    # Business logic
  │   ├── forms.py                    # Form handling
  │   ├── urls.py                     # URL routing
  │   ├── admin.py                    # Admin interface
  │   ├── mixin.py                    # Custom mixins
  │   ├── management/commands/        # Custom commands
  │   └── migrations/                 # Database migrations
  ├── education_management_system/    # Project settings
  │   ├── settings.py                 # Configuration
  │   ├── urls.py                     # Main URL config
  │   └── wsgi.py                     # WSGI entry point
  ├── templates/                      # HTML templates
  │   ├── base.html                   # Base template
  │   ├── core/                       # App templates
  │   └── registration/               # Auth templates
  ├── static/                         # Static files
  ├── requirements.txt                # Python dependencies
  └── vercel.json                     # Deployment config

  ---
  🔐 Security Features

  - CSRF protection middleware
  - XFrame options for clickjacking protection
  - Secure password validation
  - Session-based authentication
  - Environment-based secret key management
  - HTTPS enforcement in production

  ---
  📈 Database Optimization

  - Database indexes on frequently queried fields
  - Unique constraints to prevent duplicates
  - Foreign key relationships with CASCADE delete
  - select_related() and optimized queries for performance

  ---
  🛠️  Development Tools

  - Custom Management Commands:
    - setup_initial_data - Initialize database
    - load_data - Load data from Excel
    - clear_all_data - Clear database
  - Git - Version control
  - Docker - Containerization support (Dockerfile present)
  - Shell scripts - Deployment automation

  ---
  📊 Reporting Features

  - Excel export functionality using openpyxl
  - Statistical dashboards with task completion metrics
  - Multi-level reporting (District/Taluka/School)
  - Real-time progress tracking

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

  project no 10 : # RestroSync — Technical Stack & Architecture

> Petpooja-style Restaurant Management SaaS — Multi-tenant, Multi-mode, Production-ready

---

## 🏗️ Architecture Overview

Full-stack multi-tenant SaaS platform with offline-first POS, real-time kitchen display, and mobile captain app.

```
┌─────────────────────────────────────────────────────┐
│                  React Dashboard (Web)               │
├─────────────────────────────────────────────────────┤
│            Flutter Captain/Biller App (Mobile)       │
├─────────────────────────────────────────────────────┤
│         NestJS REST API + Socket.io Gateway          │
├──────────────┬──────────────────────────────────────┤
│  PostgreSQL  │  Redis (cache + sessions + pub/sub)   │
└──────────────┴──────────────────────────────────────┘
```

---

## 🎨 Frontend — React Dashboard

### Core Framework
- **React 18** — Functional components, hooks
- **Vite 7** — Lightning-fast build tool (replaces CRA/Webpack)
- **TypeScript** — Strict type safety throughout
- **React Router DOM v6** — Client-side routing, lazy loading

### UI & Styling
- **Tailwind CSS** — Utility-first styling
- **CSS Variables** — Theme tokens (dark navy sidebar, amber accent)
- **Syne + DM Sans** — Custom typography via Google Fonts
- **Lucide React** — Icon library

### State Management
- **Zustand** — Lightweight global state (auth store, UI store)
- **React Query / fetch** — Server state & API calls

### Real-time
- **Socket.io Client** — Live KOT updates, kitchen display, order status

### PWA
- **Vite PWA Plugin** — Service worker, offline caching, install prompt
- **Web Push** — Push notification support

### Key Pages & Modules
| Module | Description |
|---|---|
| Dashboard | Sales overview, live metrics |
| Menu | Categories, items, combos, modifiers |
| Orders | Active orders, KOT management |
| Tables | Floor plan, table status |
| Kitchen Display (KDS) | Real-time order queue by station |
| Billing | GST-ready bills, split/merge, refunds |
| Inventory | Stock levels, low-stock alerts |
| CRM | Customers, loyalty points, credit/khata |
| Reports | Sales, tax, hourly, audit log, fraud |
| Multi-Outlet | Branch comparison, menu push |
| Staff | Attendance, roles, permissions |
| Settings | Tax, discounts, charges, integrations |
| Super Admin | Platform management (violet theme) |

---

## ⚙️ Backend — NestJS API

### Core Framework
- **NestJS** — Modular Node.js framework (decorators, DI, guards)
- **TypeScript** — Full type safety
- **Node.js 20** — LTS runtime

### API Design
- **REST API** — `/api/v1/` prefix, camelCase JSON
- **Socket.io** — WebSocket gateway with rooms by `branchId` + kitchen station
- **Swagger/OpenAPI** — Auto-generated API docs

### Authentication & Security
- **Passport.js + JWT** — Access token (15min) + Refresh token (7 days)
- **bcrypt** — Password hashing (10 rounds)
- **PIN Login** — 4-digit PIN for POS devices
- **Role-based Guards** — OWNER, MANAGER, CAPTAIN, BILLER, KITCHEN, SUPER_ADMIN
- **Permission System** — 23 granular permissions per restaurant
- **Rate Limiting** — 500 req/15min on auth endpoints
- **Request Logger** — JSON logs: method, url, status, duration

### Database ORM
- **Prisma 5** — Type-safe ORM, migrations, Prisma Studio
- **Binary Target** — `linux-musl-openssl-3.0.x` for Alpine Docker

### Caching & Sessions
- **Redis 7** — JWT blacklist, rate limiting, pub/sub for Socket.io scaling

### Scheduled Jobs (`@nestjs/schedule`)
- **Nightly Archival** — 02:00 UTC: DailyReport gap-fill, audit log stats
- **Demo Reset** — 21:30 UTC (3 AM IST): Wipe + re-seed all demo restaurants

### Key Backend Modules
| Module | Responsibilities |
|---|---|
| Auth | JWT, PIN login, forgot/reset password |
| Restaurant | Multi-tenant setup, plan limits |
| Branch | Multi-outlet management |
| Menu | Categories, items, combos, versioning |
| Order | KOT creation, order lifecycle, token numbers |
| Bill | GST billing, bill numbers (INV/FY/seq) |
| Payment | Cash, UPI, Card, split payments |
| KDS | Kitchen display, station routing |
| Inventory | Stock tracking, alerts |
| CRM | Customers, loyalty, credit accounts |
| Reports | Sales, tax, hourly, audit |
| Multi-Outlet | Consolidated dashboard, stock transfers |
| Integrations | Razorpay, UPI QR, Zomato/Swiggy, Tally XML |
| Day Close | Cash reconciliation, carry-forward |
| Number Ranges | Offline bill/KOT number pre-allocation |
| Demo | Seed/wipe demo data per restaurant |
| Jobs | Nightly archival + demo reset crons |
| Health | `/health`, `/health/socket` endpoints |

---

## 🗄️ Database — PostgreSQL

### Database System
- **PostgreSQL 16** — Primary database (Docker volume on Hetzner)
- **30+ tables** — Full multi-tenant schema

### Schema Highlights
| Table | Key Fields |
|---|---|
| `Restaurant` | operatingMode, planId, gstin, loyaltyPointsPerHundred |
| `Branch` | restaurantId, isActive |
| `User` | role (7 types), pin, restaurantId, branchId |
| `MenuItem` | price, foodType, taxPercent, isAvailable |
| `Order` | branchId, status (8 states), businessDate, tokenNumber |
| `Bill` | billNumber (INV/FY/seq), grandTotal, paymentStatus |
| `Payment` | method (CASH/UPI/CARD/WALLET), splits |
| `KOT` | kitchenStation, kotNumber, items |
| `InventoryItem` | currentStock, reorderLevel, unit |
| `Customer` | phone (unique per restaurant), loyaltyPoints, creditBalance |
| `AuditLog` | 7-year GST retention, all mutations tracked |

### Performance
- **DB Indexes** — `orders(branchId+status)`, `orders(branchId+businessDate)`, `bills(branchId+status)`, `loyalty_points(restaurantId+customerId)`
- **Nightly DailyReport** — Pre-computed aggregates for fast reporting
- **Archival Strategy** — Scaffold for 90-day order archival

---

## 📱 Mobile — Flutter Captain/Biller App

### Framework
- **Flutter 3.27** — Cross-platform (Android APK builds clean)
- **Dart 3.6.1** — Null-safe, modern Dart

### Architecture
- **Clean Architecture** — domain / data / presentation layers
- **Riverpod** — Reactive state management
- **go_router** — Declarative navigation

### Captain App Features
- Table map, order taking, KOT push
- Menu browsing with veg/non-veg indicators
- Real-time order status via Socket.io

### Biller/POS App Features
- PIN + email login
- Barcode scanning (`mobile_scanner`)
- UPI QR generation (`qr_flutter`)
- Split payments
- Offline order queue (SQLite WAL)
- 5-second undo on actions
- 3-retry print queue
- Day-end close wizard
- Background sync every 15 min (`WorkManager`)
- Clock drift detection (blocks billing if >5min drift)

### Offline-First
- **sqflite** — Local SQLite database (WAL mode)
- **Sync Queue** — Draft orders, number range pre-allocation
- **Background Sync** — `workmanager` + foreground notification

---

## 🔌 Integrations

| Integration | Technology |
|---|---|
| Razorpay | REST API, HMAC-SHA256 webhook verification |
| UPI QR | `upi://pay?...` URL → frontend renders QR |
| Zomato / Swiggy | Webhook ingestion, idempotent order creation |
| SMS / WhatsApp | MSG91 / Twilio API |
| Tally XML Export | TALLYMESSAGE format, CGST/SGST ledger entries |
| Google Maps | Delivery tracking (MrCakeBakers pattern) |

---

## 🚀 Infrastructure & DevOps

### Hosting
- **Hetzner VPS** — Ubuntu 24.04, 74GB disk, 16% memory usage
- **Domain** — `restrosync.prashanvitech.com`
- **SSL** — Let's Encrypt via Certbot (auto-renews)

### Containerization
- **Docker 29** — All services containerized
- **Docker Compose** — Multi-service orchestration
- **`docker-compose.prod.yml`** — Production stack
- **`docker-compose.server.yml`** — Hetzner port override (3001:80)

### Services Running
| Container | Image | Port |
|---|---|---|
| `restrosync-backend` | Custom (NestJS) | 3000 (internal) |
| `restrosync-frontend` | Custom (nginx+React) | 3001→80 |
| `restrosync-postgres` | postgres:16-alpine | 5432 (internal) |
| `restrosync-redis` | redis:7-alpine | 6379 (internal) |
| `restrosync-backup` | postgres:16-alpine | nightly pg_dump |

### Nginx (Host)
- Reverse proxy: `restrosync.prashanvitech.com` → `localhost:3001`
- Frontend container nginx: serves React SPA + proxies `/api/` and `/socket.io/` to backend

### CI/CD
- **GitHub Actions** — `.github/workflows/ci.yml`
  - Backend: TypeScript build + Jest tests
  - Frontend: Vite build
  - Deploy on `main` push
- **rsync Deploy Script** — `./deploy.sh [frontend|backend|all]`
  - Syncs only changed files to Hetzner
  - Triggers Docker rebuild of target service

### Backups
- **Nightly pg_dump** — Compressed `.sql.gz` to `/backups/`
- **30-day retention** — Auto-deletes old backups

---

## 🧪 Testing

- **Jest + ts-jest** — Unit tests for backend services
- **Supertest** — HTTP integration tests
- **Playwright** — E2E tests (`e2e/` directory)
- **Mock Strategy** — `const mockPrisma: any = {}` (avoids circular TS errors)

---

## 🔐 Security

- JWT access (15min) + refresh (7d) token rotation
- PIN login for POS (no password exposure on floor)
- Rate limiting on auth (500 req/15min)
- RBAC with 23 granular permissions
- Secrets in `.env` (never committed, excluded from rsync)
- DPDPA compliance — customer data anonymization (`isAnonymized`)
- Audit log — 7-year GST retention

---

## 🌐 Operating Modes

| Mode | Description | Features |
|---|---|---|
| **COUNTER** | Quick service / takeaway | Token display, cashier billing, no tables |
| **TABLE_SIMPLE** | Casual dine-in | Tables, captain ordering, basic KOT |
| **FULL_SERVICE** | Fine dining | Full KDS, multiple stations, manager controls |

---

## 📊 Tech Stack Summary

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 7, TypeScript, Tailwind CSS, Zustand |
| Mobile | Flutter 3.27, Riverpod, go_router, sqflite |
| Backend | NestJS, TypeScript, Passport JWT, Socket.io |
| Database | PostgreSQL 16, Prisma 5, Redis 7 |
| Real-time | Socket.io (rooms by branch + kitchen station) |
| Auth | JWT + PIN login, RBAC, 23 permissions |
| Infra | Hetzner VPS, Docker, nginx, Certbot SSL |
| CI/CD | GitHub Actions + rsync deploy script |
| Integrations | Razorpay, UPI QR, Zomato/Swiggy, Tally XML |
| Testing | Jest, ts-jest, Playwright |
| Monitoring | NestJS Logger, request logger middleware, `/health` endpoint |

project no 11 : # ShopBill — Technical Stack & Architecture

> Offline-first desktop billing software for Indian retail shops — GST-ready, multi-language, thermal printing, cloud sync.

---

## 🏗️ Architecture Overview

Monorepo with npm workspaces. Electron desktop app with a shared React UI, a Django cloud backend for sync, and a PWA variant for browser access.

```
┌─────────────────────────────────────────────────────────┐
│            React 18 UI (packages/ui)                    │
│    Vite + Tailwind CSS + Zustand + i18next              │
├─────────────────────────────────────────────────────────┤
│           Electron Shell (packages/electron-app)        │
│       better-sqlite3 (WAL) + IPC bridge + preload      │
├──────────────────────────┬──────────────────────────────┤
│   Core Logic (packages/core)   │  PWA (packages/pwa-app) │
│  GST calc, invoice, receipt    │  Same UI, browser-only  │
├──────────────────────────┴──────────────────────────────┤
│         Django REST Backend (packages/backend)           │
│         JWT auth + sync push/pull + web dashboard        │
└─────────────────────────────────────────────────────────┘
```

---

## 🗂️ Monorepo Structure

| Package | Description |
|---|---|
| `packages/core` | Shared TypeScript logic — GST calculator, invoice types, receipt builder |
| `packages/ui` | React 18 UI — all screens, hooks, components |
| `packages/electron-app` | Electron shell — SQLite DB, IPC handlers, printing, sync |
| `packages/pwa-app` | Vite PWA build of the same UI for browser access |
| `packages/backend` | Django REST API for cloud sync and owner web dashboard |

---

## 🎨 Frontend — React UI (`packages/ui`)

### Core Framework
- **React 18** — Functional components, hooks
- **Vite 6** — Build tool, dev server (port 5174)
- **TypeScript 5.6** — Strict type safety
- **React Router DOM v6** — Client-side routing

### UI & Styling
- **Tailwind CSS 3** — Utility-first styling
- **CSS Variables** — Theme tokens (`--surface`, `--ink`, `--primary`, `--accent`)
- **DM Sans + DM Mono** — Typography via Google Fonts
- **Lucide React** — Icon library
- **Dark mode** — `html.dark {}` CSS vars, `useTheme` hook, sidebar toggle

### State Management
- **Zustand 5** — Global state (cart, auth, customers, sounds)
- **Custom hooks** — `useCart`, `useCustomers`, `useSoundEffects`, `useTheme`

### Internationalization
- **i18next 23 + react-i18next 15** — 6 languages supported
- **Languages** — English, Hindi (hi), Kannada (kn), Marathi (mr), Telugu (te), Tamil (ta)
- **Language selector** in ShopSettings; persisted to localStorage

### Barcode & QR
- **html5-qrcode 2.3** — Camera barcode scanner in ProductSearch
- **jsbarcode 3.12** — Barcode rendering
- **qrcode 1.5** — UPI QR generation on printed receipts

### Excel
- **xlsx 0.18** — Export products/invoices, import products, download template

### Notifications
- **react-hot-toast 2.4** — Toast notifications

### Key Screens & Modules
| Module | Description |
|---|---|
| Billing | Product search, cart (Zustand), GST calculator, quick bill |
| Favorites Grid | Star-pinned products, stored in localStorage |
| Hold Bill | Suspend and resume active carts (held_bills table) |
| Payment Modal | Cash/UPI/Card, credit (khata), change calculation |
| Invoice List / Detail | Search, filter, reprint, cancel, return |
| Customers & Ledger | CRUD, credit balance, khata payments |
| Products & Variants | CRUD, category manager, stock adjustment, VariantManager |
| Suppliers & Ledger | CRUD, purchase orders, payment recording |
| Dashboard | Live sales, top products, daily stats |
| Advanced Reports | Date-range, product-wise, GST, stock, customer outstanding, profit margins |
| GSTR-1 | B2B, B2C, HSN sub-tabs + 4-sheet Excel export |
| Expenses | Daily expense tracking, shown in net profit |
| Day-End Closing | Sales/expense/profit summary + localStorage close flag |
| Excel Tools | Export products/invoices, import products, template download |
| Backup & Restore | Manual backup, auto-backup at 20:00, restore from file |
| Archive Manager | Archive old invoices to `invoices_archive` by year cutoff |
| PIN Login | 4-digit PIN, role-based access (`useAuth` Zustand store) |
| User Management | Add/edit staff users with roles |
| Audit Log Viewer | Searchable log of all mutations |
| Printer Config | Paper width, UPI ID, auto-print toggle |
| Cloud Sync | Login/register, push/pull status, last sync time |
| License | Key activation (SHOPBILL-PRO-XXXX format, 1-year expiry) |
| Dark Mode | Toggle in sidebar footer |

---

## ⚙️ Electron Shell (`packages/electron-app`)

### Core
- **Electron 33** — Desktop shell, `BrowserWindow`, IPC
- **TypeScript 5.6** — Compiled to CommonJS for Electron compatibility
- **Context isolation + preload** — Secure IPC bridge (`preload.ts` exposes `window.electronAPI`)
- **Single instance lock** — Prevents duplicate app windows

### Database
- **better-sqlite3 11** — Synchronous SQLite, WAL mode
- **@electron/rebuild** — Recompiles native modules after `npm install`
- **DB location** — `~/Library/Application Support/ShopBill/data/shopbill.db` (Mac)

### Migrations (10 total)
| Migration | Contents |
|---|---|
| 001_initial | shops, categories, products, invoices, invoice_items |
| 002_customers_khata_variants | customers, khata_payments, product_variants, app_settings, `is_credit` on invoices |
| 003_returns_users_audit | return_items, users, audit_log |
| 004_held_bills | held_bills |
| 005_expenses | expenses |
| 006_igst | IGST columns on invoice_items |
| 007_expenses_sync | sync fields on expenses |
| 008_suppliers | suppliers, purchase_orders, purchase_items |
| 009_supplier_payments | supplier_payments |
| 010_invoice_archive | invoices_archive, invoice_items_archive |

### Printing
- **node-thermal-printer 4.6** — ESC/POS commands for thermal printers
- **Browser fallback** — `window.print()` via BrowserWindow for non-thermal setups
- **UPI QR on receipt** — `qrcode` generates data URL; embedded in browser print or sent as ESC/POS QR command
- **Auto-print** — Configurable, triggers after invoice save

### HTTP API
- **Local HTTP server** (port 5175) — Browser dev access to IPC data

### Packaging
- **electron-builder 25** — Creates installers
- **NSIS** — Windows installer (one-click off, custom install dir, Start Menu + Desktop shortcuts)
- **DMG** — Mac (x64 + arm64 universal builds)
- **AppImage** — Linux

### IPC Handler Categories
`products`, `categories`, `invoices`, `customers`, `khata`, `returns`, `users`, `audit`, `backup`, `sync`, `report`, `db`, `printer`, `license`, `suppliers`

---

## 🧩 Core Package (`packages/core`)

- **TypeScript 5** → compiled to **CommonJS** (required by Electron)
- GST rate calculator (CGST/SGST/IGST split)
- Invoice type definitions shared across UI + Electron
- Receipt template builder — outputs structured line objects (`text`, `separator`, `qr`)
- Text receipt renderer — plain text for thermal print

---

## 🌐 Backend — Django REST API (`packages/backend`)

### Core Framework
- **Django 5.1** — Python web framework
- **Django REST Framework 3.15** — Serializers, ViewSets, routers
- **Gunicorn 23** — WSGI production server
- **Whitenoise 6.8** — Static file serving

### Authentication
- **djangorestframework-simplejwt 5.3** — JWT access + refresh tokens
- **django-cors-headers 4.4** — CORS for Electron + browser clients

### Sync Engine
- **POST `/api/sync/push/`** — Append-only for financial records (invoices, payments); upsert for non-financial (products, customers)
- **GET `/api/sync/pull/?since=`** — Delta pull by timestamp
- **Device registration** — Each Electron install registers a device ID

### Reports API
- `GET /api/dashboard/` — Today's stats
- `GET /api/reports/?from=&to=` — Date-range sales data

### Owner Web Dashboard
- Single-file SPA served at `/` and `/owner/`
- Mobile-first, works on phone browser
- Login, today stats, date-range reports, invoice list, customer outstanding

### Database
- **PostgreSQL** (via psycopg2-binary 2.9) — Production
- **SQLite** — Development default

### Extras
- **openpyxl 3.1** — Excel report generation on the backend
- **python-decouple 3.8** — `.env` config management
- **Pillow 11** — Image handling

---

## 🔐 Security & Auth

- PIN login (4-digit) for POS devices — no password on the billing floor
- JWT access + refresh tokens for cloud sync
- Role-based access — roles enforced in IPC handlers and UI guards
- Context isolation in Electron — renderer has no Node.js access
- Secrets in `.env` — never committed

---

## 🖨️ Printing

| Mode | Technology |
|---|---|
| Thermal (USB/Network) | `node-thermal-printer` — ESC/POS commands |
| Browser print | `BrowserWindow.webContents.print()` fallback |
| UPI QR on receipt | `qrcode` npm → data URL embedded in print |
| Reprint | Available from InvoiceDetail screen |
| Test page | Printer test from PrinterConfig settings |

---

## 📊 Reporting

| Report | Description |
|---|---|
| Daily Sales | Revenue, GST collected, net profit after expenses |
| Advanced Reports | Date range, product-wise, stock levels, customer outstanding |
| GSTR-1 | B2B/B2C/HSN breakdown, 4-sheet Excel export |
| Profit Report | Per-product margin %, gross/net profit, margin bar |
| Day-End Close | Cash reconciliation summary |
| Audit Log | All mutations with user + timestamp |

---

## 🚀 Infrastructure & DevOps

### Hosting
- **Hetzner VPS** — Ubuntu, production server
- **Domain** — `billing.prashanvitech.com`
- **nginx** — Reverse proxy, SSL termination
- **Let's Encrypt / Certbot** — SSL (auto-renews)

### PWA Deploy
- Built at `packages/pwa-app/dist/`
- rsync target: `/var/www/billing/packages/pwa-app/dist/`

### CI/CD
- **GitHub Actions** — `.github/workflows/build.yml`
  - Triggered on `v*` tags + `workflow_dispatch`
  - Builds Windows (NSIS), Mac (DMG x64 + arm64), PWA
  - Uploads artifacts (30-day retention)
  - Creates GitHub Release with attached installers on tag push

### Release Artifacts
| Platform | Artifact |
|---|---|
| Windows | `ShopBill-Setup-{version}.exe` |
| Mac Intel | `ShopBill-{version}-x64.dmg` |
| Mac Apple Silicon | `ShopBill-{version}-arm64.dmg` |
| PWA | `dist/` folder rsynced to Hetzner |

---

## 🧪 Testing

- **Playwright** — E2E tests (`e2e/` directory), `@playwright/test 1.58`
- **Web Audio API** — Sound effects tested via `useSoundEffects` hook
- TypeScript strict mode catches type errors at build time across all 3 packages

---

## 📦 Tech Stack Summary

| Layer | Technology |
|---|---|
| Desktop shell | Electron 33 |
| UI framework | React 18, Vite 6, TypeScript 5.6 |
| Styling | Tailwind CSS 3, CSS variables, DM Sans + DM Mono |
| State | Zustand 5 |
| Routing | React Router DOM v6 |
| i18n | i18next 23 — 6 languages (EN, HI, KN, MR, TE, TA) |
| Local DB | better-sqlite3 11 (WAL mode), 10 migrations |
| Printing | node-thermal-printer 4.6 (ESC/POS), browser fallback |
| Barcode | html5-qrcode (scan), jsbarcode (render) |
| QR | qrcode (UPI QR on receipts) |
| Excel | xlsx 0.18 (import/export) |
| Cloud backend | Django 5.1, DRF 3.15, JWT, Gunicorn |
| Cloud DB | PostgreSQL (prod), SQLite (dev) |
| Sync | Custom push/pull delta sync engine |
| Packaging | electron-builder 25 (NSIS, DMG, AppImage) |
| CI/CD | GitHub Actions + GitHub Releases |
| Infra | Hetzner VPS, nginx, Let's Encrypt SSL |
| Testing | Playwright E2E |
| Monorepo | npm workspaces |


project no 12 : # SSMS — Technical Stack & Architecture

> Salon & Spa Management System — Multi-tenant, Role-based, Production-ready

---

## 🏗️ Architecture Overview

Full-stack monorepo SaaS platform with real-time queue management, GST billing, loyalty engine, and a customer mobile app.

```
┌──────────────────────────────────────────────────────┐
│            Next.js 14 Admin Dashboard (Web)           │
├──────────────────────────────────────────────────────┤
│          React Native / Expo Customer App (Mobile)    │
├──────────────────────────────────────────────────────┤
│       Express + tRPC v11 API + Socket.io Gateway      │
├──────────────────────────────────────────────────────┤
│   Express Print Server (Thermal ESC/POS — local PC)   │
├─────────────────────┬────────────────────────────────┤
│     PostgreSQL 16   │  Redis 7 (sessions + queues)    │
└─────────────────────┴────────────────────────────────┘
```

---

## 📦 Monorepo Structure

- **Tooling:** Turborepo 2 + npm workspaces
- **Language:** TypeScript 5.5 everywhere (strict)
- **Package manager:** npm 11

```
apps/
  api/           → Express + tRPC v11 server          :4000
  admin/         → Next.js 14 App Router dashboard    :3002
  print-server/  → Thermal printer ESC/POS daemon     :3100
  customer-app/  → React Native Expo ~52 mobile app
packages/
  db/            → Prisma schema + generated client   (@salon/db)
  shared/        → Types, constants, utils            (@salon/shared)
```

---

## 🎨 Frontend — Next.js Admin Dashboard

### Core Framework
- **Next.js 14** — App Router, Server Components, layout groups
- **React 18** — Functional components, hooks
- **TypeScript 5.5** — Strict type safety

### UI & Styling
- **Tailwind CSS 3** — Utility-first styling with custom `navy-*` design tokens
- **Design System** — "Clean Navy" (`#0c447c` nav, `#185fa5` accent, `#f4f6fb` page bg)
- **No shadows** — Depth via border contrast (`#c8d2e8`, 0.5px)
- **Lucide React** — Icon library (only icon lib used)
- **Recharts 3** — Charts and analytics graphs
- **qrcode.react** — QR code generation (digital menu, self check-in)

### State & Data Fetching
- **Zustand 5** — Auth store (persisted to `localStorage`)
- **tRPC v11 Client** — End-to-end typesafe API calls
- **TanStack Query v5** — Server state, caching, background refetch
- **Zod 3** — Schema validation (shared with API)

### Real-time
- **Socket.io Client 4** — Live queue updates, KDS, billing events

### Key Modules
| Module | Description |
|---|---|
| Dashboard | Live sales, worker status, today's metrics |
| Appointments | Calendar, slot booking, worker assignment |
| Queue Management | Walk-in tokens, self check-in QR, live display |
| Billing | GST-ready bills, refunds, payment events |
| Workers | Shifts, leaves, commission ledger, salary cycles |
| Customers | Profiles, loyalty points, memberships, family groups |
| Services & Products | Catalog, pricing, inventory |
| Loyalty Engine | Points, tiers, memberships, referrals |
| Consent Forms | Digital consent templates and signed records |
| Expenses | Operational expense tracking |
| Reports | Sales, tax, audit log, commissions |
| Settings | Salon profile, tax config, staff roles |

---

## 📱 Mobile — React Native Customer App

### Core Framework
- **Expo ~52** — Managed workflow, Expo Go for dev
- **React Native 0.76** — Cross-platform iOS & Android
- **TypeScript 5.5** — Strict

### Navigation
- **React Navigation 6** — Stack + bottom tab navigator
- **react-native-screens 4** — Native screen containers
- **react-native-safe-area-context** — Safe area insets

### UI & Styling
- **Plain StyleSheet** — No Tailwind; theme via `colors.ts` constants
- **Design tokens** — Same palette as admin (`#0c447c`, `#185fa5`, etc.)
- **Lucide React Native** — Icon library
- **react-native-svg 15** — SVG rendering
- **react-native-reanimated 3** — Smooth animations
- **react-native-gesture-handler 2** — Gesture support

### State & Data
- **Zustand 5** — Auth store (persisted via `expo-secure-store`)
- **tRPC v11 Client** — Type-only import; Metro never bundles server deps
- **TanStack Query v5** — Server state

### Auth
- **expo-secure-store** — JWT stored in device keychain
- **OTP login** — Customer upsert + 6-digit OTP (no password)
- **JWT hydration** — Token parsed on launch, expiry checked client-side

### Key Screens
| Screen | Description |
|---|---|
| Login | Phone + OTP, demo mode |
| Home | Salon info, quick actions |
| Queue | Self check-in, live token status |
| Appointments | Book, view, cancel slots |
| Digital Menu | QR-linked service catalog |
| Loyalty | Points balance, transaction history |
| Membership | Active plan, benefits |
| Profile | Personal details, preferences |

---

## ⚙️ Backend — Express + tRPC API

### Core Framework
- **Express 4** — HTTP server
- **tRPC v11** — End-to-end typesafe RPC (no REST endpoints for app data)
- **TypeScript 5.5** — Strict
- **Zod 3** — Input validation on all procedures

### Procedure Hierarchy
```
publicProcedure      → no auth
protectedProcedure   → valid JWT + live active_sessions row
  adminProcedure     → role: ADMIN
  billingProcedure   → role: ADMIN | BILLING
  workerProcedure    → role: ADMIN | WORKER
```
Customer routes use `protectedProcedure` with inline `role === "CUSTOMER"` checks.

### Auth & Security
- **jsonwebtoken 9** — JWT signing (`HS256`)
- **Session-based invalidation** — `active_sessions` table; deleting the row revokes the token instantly
- **Session limits** — Worker=1, Billing=2, Admin=∞, Customer=5
- **OTP flow** — 6-digit codes stored in `otpCodes` table, time-limited
- **CORS** — Configured per environment

### Real-time
- **Socket.io 4** — Rooms by `salon:{salonId}`; JWT auth on handshake
- **Singleton pattern** — `setIo/getIo/emitToSalon` prevents circular imports

### Background Jobs
- **BullMQ 5** — Job queue for async tasks (reminders, follow-ups, failed jobs retry)
- **ioredis 5** — Redis client (BullMQ transport + session cache)

### Other
- **xmlbuilder2** — Tally XML export for accounting
- **dotenv** — Single `.env` at repo root

---

## 🖨️ Print Server

- **Express 4** — HTTP daemon running on billing PC at `:3100`
- **node-thermal-printer 4** — ESC/POS commands to USB/TCP thermal printer
- **Health endpoint** — `GET /health` (admin dashboard polls every 5 s)
- **Print endpoint** — `POST /print` → ESC/POS receipt
- **Offline queue** — `pending_prints` (IndexedDB in admin browser) for print failures

---

## 🗄️ Database & ORM

- **PostgreSQL 16** — Primary data store (port 5433 local dev)
- **Prisma 5** — ORM, migrations, seeding, Prisma Studio
- **Multi-tenancy** — Every table has `salonId` column
- **Wire type safety** — Prisma `Decimal`/`Date` → mapped to `string` before tRPC response
- **Audit log** — Every mutation writes `{ salonId, userId, role, action, entity, entityId, oldValues, newValues, ipAddress }`
- **GST invoice sequencing** — `SELECT ... FOR UPDATE` atomic sequence with financial-year rollover

### Schema Phases
| Phase | Tables Added |
|---|---|
| 1 — Core MVP | `salons`, `users`, `customers`, `services`, `workers`, `bills`, `billItems`, `auditLogs`, `otpCodes`, `activeSessions` |
| 2 — Money/GST | `products`, `refunds`, `customerCredits`, `creditTxns`, `invoiceSequences`, `invoiceAllocations`, `paymentEvents`, `consentTemplates`, `consentForms`, `expenses`, `commissionLedger`, `salaryCycles` |
| 3 — Loyalty | `loyaltyPoints`, `loyaltyTransactions`, `memberships`, `membershipPlans`, `membershipTransactions`, `familyGroups`, `familyMembers`, `referralCodes`, `referralEvents`, `reminders`, `followUps`, `reviews`, `failedJobs` |

---

## 🔐 Security

- JWT access tokens + server-side session invalidation (no expiry wait)
- OTP-based login — no passwords for customers or workers
- Role-based access control (ADMIN / BILLING / WORKER / CUSTOMER)
- `ipAddress` captured on every tRPC request, stored in audit log
- Secrets in repo-root `.env` (never committed)
- Prisma parameterized queries — no raw SQL injection risk

---

## 🚀 Infrastructure & Deployment

### Local Dev
| Service | Port | Notes |
|---|---|---|
| API | 4000 | ts-node-dev hot reload |
| Admin | 3002 | Next.js dev server |
| Print Server | 3100 | ts-node-dev |
| Customer App | 8082 | Expo Go LAN QR |
| PostgreSQL | 5433 | Docker container |
| Redis | 6379 | Docker container |

### Production
- **API + DB:** Docker Compose on Hetzner VPS behind Nginx + SSL (Certbot)
- **Admin:** Vercel (free tier), env `NEXT_PUBLIC_API_URL=https://api.yourdomain.com`
- **Mobile:** Expo EAS Build → Play Store / App Store; JS-only OTA updates
- **Print Server:** Installed locally on billing PC (not on cloud)

---

## 🧰 Developer Tooling

- **Turborepo 2** — Parallel builds, dependency-ordered pipeline, caching
- **ESLint 8** — TypeScript-aware linting (`@typescript-eslint`)
- **Prettier 3** — Consistent formatting across all packages
- **ts-node-dev** — API/print-server dev with hot reload
- **Prisma Studio** — Visual DB browser (`npx prisma studio`)

---

## 📊 Tech Stack Summary

| Layer | Technology |
|---|---|
| Monorepo | Turborepo 2, npm workspaces |
| Language | TypeScript 5.5 (strict, everywhere) |
| Admin Web | Next.js 14 App Router, React 18, Tailwind CSS 3, Zustand 5 |
| Mobile | React Native 0.76, Expo ~52, Expo Go |
| API | Express 4, tRPC v11, Zod 3 |
| Real-time | Socket.io 4 (rooms by salonId) |
| Background Jobs | BullMQ 5, ioredis 5 |
| Database | PostgreSQL 16, Prisma 5 |
| Cache / Sessions | Redis 7 |
| Auth | JWT (jsonwebtoken 9), OTP login, server-side session invalidation |
| Charts | Recharts 3 |
| Icons | Lucide React / Lucide React Native |
| Print | node-thermal-printer 4, ESC/POS |
| Infra | Hetzner VPS, Docker, Nginx, Certbot SSL |
| Mobile Distribution | Expo EAS Build, Play Store, App Store |
| Accounting Export | xmlbuilder2 (Tally XML) |
| Tooling | ESLint 8, Prettier 3, ts-node-dev |
