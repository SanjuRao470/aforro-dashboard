# 🚀 Aforro React Dashboard Assignment

This project is a React-based dashboard application built as part of the Aforro technical assessment.  
It replicates a Figma design and includes a fully functional Users module with API integration, search, sorting, filtering, and proper state handling.

---

## 📌 Features Implemented

### 🎨 UI / Dashboard
- Responsive dashboard layout based on provided Figma design
- Sidebar navigation with active route highlighting
- Header and layout structure with reusable components
- Clean and modular component architecture

---

### 📊 Users Table (Core Feature)
- Fetches user data from public API
- Displays data in a structured table format

**Table Columns:**
- Name  
- Email  
- Company Name  
- City  

---

### ⚙️ Functionalities

- 🔍 Search users by name or email
- ↕️ Sort users by name (A–Z and Z–A)
- 🏙️ Filter users by city
- ⏳ Loading state handling during API fetch
- ❌ Error handling for failed API requests
- 📭 Empty state handling when no data matches filters

---

## 🌐 API Integration

### Public API Used:
https://jsonplaceholder.typicode.com/users

### Implementation Details:
- Data fetched using Axios
- API logic separated into service layer (`services/`)
- Data handling managed via custom hooks (`hooks/`)
- State management structured for scalability

---

## 🧱 Tech Stack

- React.js (Functional Components)
- React Router DOM (Routing)
- Redux Toolkit (UI state management)
- React Query (Data fetching & caching)
- Axios (HTTP requests)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Lucide React (Icons)
- Vite (Build tool)

---

## 📁 Project Structure

src/
├── components/
├── pages/
├── hooks/
├── services/
├── store/
├── constants/
├── lib/
├── App.jsx
└── main.jsx

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/SanjuRao470/aforro-dashboard.git

2. Install dependencies
npm install

3. Start development server
npm run dev

4. Open in browser
http://localhost:5173

---

## 🧠 Assumptions & Decisions

- Focused on clean and scalable component architecture  
- Separated API logic into service and hook layers  
- Prioritized usability with loading, error, and empty states  
- Used reusable components for maintainability  
- Balanced UI accuracy with responsiveness  
- Followed production-level folder structure  

---

## 📌 Key Highlights

- Clean and modular folder structure  
- Separation of UI and business logic  
- Fully functional API integration  
- Responsive dashboard UI  
- Production-style React architecture