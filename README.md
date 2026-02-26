# Smart Urban Grievance System (Prototype v1)

A hackathon prototype built for **HackGenX Amravati**  
A role-based, accountable urban grievance reporting and tracking platform.

## 🧩 Overview

This prototype demonstrates:
- Citizen complaint submission via photo + location
- AI-assisted category suggestion (mocked)
- Priority score calculation
- SLA tracking
- Role-based views (Citizen / Admin / Worker)
- Duplicate detection & community validation

## 🚀 Features

⚡ **Citizen App**
- Report issue with photo & GPS
- View history (Pending / In Progress / Completed)
- Simple profile & AI help

⚡ **Admin Dashboard**
- View & assign complaints
- Track SLA & priority
- Worker management
- Issue details with map

⚡ **Field Worker Flow**
- Assigned tasks
- Mark ‘In Progress’ and ‘Completed’
- Upload resolution evidence

## 🛠️ Tech Stack

- Frontend: React (Vite-powered SPA)
- CSS: Plain CSS (no frameworks)
- Mock AI logic in frontend
- Mock data for demo scenarios

## 📂 Repo Structure
```text
frontend/
├── src/
│   ├── pages/
│   ├── styles/
│   └── mockData.js
├── index.html
├── package.json
└── vite.config.js
.gitignore
