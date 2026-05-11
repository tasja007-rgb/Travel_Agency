# ✈️ Travel Agency Business Management System (ERP)

A comprehensive full-stack ERP platform for travel agencies — built with React, Tailwind CSS, and Supabase.

## 📁 Repository Structure

```
travel-agency-erp/
├── public/
│   └── logo.png                        # Agency logo for invoices
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx           # Main dashboard shell + layout
│   │   │   ├── PulseMetrics.jsx        # Top row KPI cards (revenue, profit, etc.)
│   │   │   ├── SalesPieChart.jsx       # Recharts pie — sales by category
│   │   │   ├── RevenueTrendChart.jsx   # Recharts line — 30-day revenue vs expense
│   │   │   ├── TransactionsTable.jsx   # Live scrolling ledger table
│   │   │   └── AgentLeaderboard.jsx    # Agent profit rankings
│   │   ├── booking/
│   │   │   ├── BookingForm.jsx         # Universal dynamic booking form
│   │   │   └── BookingList.jsx         # Searchable booking data table
│   │   ├── visa/
│   │   │   └── VisaKanban.jsx          # Kanban board with drag-and-drop
│   │   ├── invoice/
│   │   │   └── InvoiceGenerator.js     # jsPDF invoice utility
│   │   └── shared/
│   │       ├── Sidebar.jsx             # Navigation sidebar
│   │       ├── Header.jsx              # Top bar with user info
│   │       ├── ExpenseForm.jsx         # Expense logging form
│   │       └── ProtectedRoute.jsx      # Auth guard component
│   ├── pages/
│   │   ├── LoginPage.jsx               # Auth page
│   │   ├── DashboardPage.jsx           # Main dashboard page
│   │   ├── BookingsPage.jsx            # Bookings management page
│   │   ├── VisaPage.jsx                # Visa kanban page
│   │   └── ExpensesPage.jsx            # Expense tracker page
│   ├── hooks/
│   │   ├── useAuth.js                  # Auth state hook
│   │   ├── useBookings.js              # Bookings CRUD hook
│   │   └── useTransactions.js          # Transactions data hook
│   ├── lib/
│   │   └── supabaseClient.js           # Supabase client initialisation
│   ├── utils/
│   │   └── formatters.js               # Currency, date, number formatters
│   └── styles/
│       └── index.css                   # Global CSS + Tailwind directives
├── supabase/
│   ├── schema.sql                      # Full DB schema + RLS policies
│   └── seed.sql                        # Sample seed data
├── .env.example                        # Environment variable template
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/travel-agency-erp.git
cd travel-agency-erp
npm install
```

### 2. Configure Supabase
- Create a free project at [supabase.com](https://supabase.com)
- Copy your **Project URL** and **anon public key**
- Duplicate `.env.example` → `.env.local` and fill in values

### 3. Initialize the Database
- Open your Supabase project → **SQL Editor**
- Paste and run `supabase/schema.sql` (creates all tables + RLS)
- Optionally run `supabase/seed.sql` for demo data

### 4. Run Locally
```bash
npm run dev
```

### 5. Deploy to Netlify
```bash
# Push to GitHub, then connect repo in Netlify dashboard
# Set environment variables in Netlify → Site Settings → Environment Variables
```

## 🔐 Roles & Permissions
| Role       | Can Do |
|------------|--------|
| Admin      | Full access — all modules, users, settings |
| Manager    | View dashboard, manage bookings & visas |
| Agent      | Create/view own bookings only |
| Accountant | Log expenses, view financial reports |

## 📦 Tech Stack
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + RLS + Storage)
- **Charts**: Recharts
- **PDF**: jsPDF + jspdf-autotable
- **Drag & Drop**: @dnd-kit/core
- **Deployment**: Netlify
