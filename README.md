
# AI Demand Forecasting Platform

An AI-powered full-stack demand forecasting and business analytics platform built using FastAPI, React.js, and Machine Learning.

The platform helps businesses upload historical sales datasets, analyze performance metrics, generate future demand predictions, and download business forecasting reports through an interactive dashboard.

---

# Features

## Authentication System
- User Registration & Login
- JWT Authentication
- Protected Frontend Routes
- Secure API Access
- Session Management

---

## Dataset Management
- Upload CSV / Excel Files
- Automated Dataset Validation
- Missing Value Handling
- Duplicate Data Removal
- Data Cleaning Pipeline

---

## Analytics Dashboard
- Revenue Analytics
- Monthly Sales Analysis
- Product Performance Insights
- Interactive Charts & Graphs
- KPI Summary Cards

---

## AI Forecasting Module
- Prophet Time-Series Forecasting
- Future Revenue Prediction
- Product-wise Forecasting
- Category-wise Forecasting
- Forecast Accuracy Evaluation (MAPE)

---

## Reports Module
- PDF Report Generation
- Excel Report Export
- Forecast Summary Reports
- Business Analytics Reports

---

# Tech Stack

## Backend
- FastAPI
- SQLAlchemy
- MySQL
- JWT Authentication
- Pandas
- Prophet
- Scikit-learn
- ReportLab

---

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Recharts
- Framer Motion
- React Hot Toast
- React Loading Skeleton

---

# Project Structure

```bash
AI-Demand-Forecasting/
│
├── backend/
│   ├── app/
│   │   ├── auth/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── config.py
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── uploads/
│   ├── reports/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/your-username/AI_Demand_Forecasting.git
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder:

```env
DATABASE_URL=mysql+pymysql://root:password@localhost/ai_forecasting

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

# AI Forecasting Workflow

```text
Dataset Upload
      ↓
Data Preprocessing
      ↓
Feature Engineering
      ↓
Model Training
      ↓
Forecast Generation
      ↓
Analytics Visualization
      ↓
PDF / Excel Report Generation
```

---

# Forecasting Capabilities

- Monthly Revenue Forecasting
- Product-wise Demand Prediction
- Category-wise Forecasting
- Sales Trend Analysis
- Forecast Accuracy Evaluation

---

# Security Features

- JWT Authentication
- Protected API Routes
- Secure Environment Variables
- Token-Based Authorization
- Frontend Route Protection

---

# Future Enhancements

- XGBoost Forecasting
- LSTM Forecasting
- Real-Time Business Analytics
- Cloud Deployment
- Role-Based Access Control
- Advanced BI Dashboard
  
---

# Project Highlights

- Full Stack AI Application
- Real-Time Forecast Analytics
- Interactive Business Dashboard
- Machine Learning Integration
- Clean Modular Architecture
- Production-Ready Structure
