FULL STACK APP
# 🎓 Student Management System

A full-stack web application to manage student records — built with **React**, **Node.js + Express**, and **MongoDB**.

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/Node.js-18%2B-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About the Project

The **Student Management System** is a full-stack CRUD application that allows users to:
- Add new students with their details
- View all registered students in a table
- Edit existing student records
- Delete students from the system

All data is stored persistently in **MongoDB**. The frontend communicates with the backend via a **REST API** built using **Express.js**.

---

## 🛠 Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | React.js            |
| Backend    | Node.js + Express   |
| Database   | MongoDB (Mongoose)  |
| HTTP Client | Axios              |
| Dev Tool   | Nodemon             |
| IDE        | Cursor              |

---

## ✨ Features

- ✅ Add a new student (Name, Email, Course, Age)
- ✅ View all students in a responsive table
- ✅ Edit any student's details
- ✅ Delete a student with confirmation prompt
- ✅ Data persists in MongoDB
- ✅ REST API with full CRUD support
- ✅ CORS-enabled for local development

---

## 📁 Project Structure

```
student-management-system/
│
├── backend/
│   ├── models/
│   │   └── Student.js          # Mongoose schema
│   ├── routes/
│   │   └── studentRoutes.js    # API route handlers
│   ├── .env                    # Environment variables
│   ├── server.js               # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── studentAPI.js   # Axios API calls
│   │   ├── components/
│   │   │   ├── StudentForm.js  # Add / Edit form
│   │   │   └── StudentList.js  # Table of students
│   │   ├── App.js              # Root component
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ✅ Prerequisites

Make sure the following are installed on your system before running this project:

| Tool     | Version  | Download Link                                  |
|----------|----------|------------------------------------------------|
| Node.js  | 18+      | https://nodejs.org                             |
| MongoDB  | 6.0+     | https://www.mongodb.com/try/download/community |
| Git      | Latest   | https://git-scm.com/downloads                  |
| Cursor   | Latest   | https://cursor.sh                              |
| Postman  | Latest   | https://www.postman.com/downloads              |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/student-management-system.git
cd student-management-system
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=mongodb://localhost:27017/studentDB
PORT=5000
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

---

## ▶️ Running the Application

You need **3 terminals** running simultaneously:

### Terminal 1 — Start MongoDB

```bash
mongod
```

> On Windows, MongoDB may run as a background service automatically after installation.

### Terminal 2 — Start Backend Server

```bash
cd backend
npm run dev
```

Expected output:
```
🚀 Server running on port 5000
✅ MongoDB Connected
```

### Terminal 3 — Start Frontend (React)

```bash
cd frontend
npm start
```

The app will open automatically at:
```
http://localhost:3000
```

---

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/students`

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Get all students         |
| GET    | `/:id`         | Get a single student     |
| POST   | `/`            | Create a new student     |
| PUT    | `/:id`         | Update a student by ID   |
| DELETE | `/:id`         | Delete a student by ID   |

### Sample Request Body (POST / PUT)

```json
{
  "name": "Ravi Kumar",
  "email": "ravi@example.com",
  "course": "B.Tech CSE",
  "age": 20
}
```

### Sample Response

```json
{
  "_id": "64abc123def456",
  "name": "Ravi Kumar",
  "email": "ravi@example.com",
  "course": "B.Tech CSE",
  "age": 20,
  "enrollmentDate": "2024-01-15T10:30:00.000Z"
}
```

---

## 🔐 Environment Variables

The backend requires the following environment variables in `backend/.env`:

| Variable    | Description                    | Default                                  |
|-------------|--------------------------------|------------------------------------------|
| `MONGO_URI` | MongoDB connection string      | `mongodb://localhost:27017/studentDB`    |
| `PORT`      | Port for the Express server    | `5000`                                   |

> ⚠️ Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

---

## 🖥️ Screenshots

### Dashboard / Student List
> A table listing all students with Edit and Delete buttons.

### Add Student Form
> A form with fields: Name, Email, Course, Age.

### Edit Student
> The same form pre-filled with existing data when Edit is clicked.

---

## 🚀 Pushing to GitHub

```bash
# From the root folder
cd student-management-system

# Create .gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

git add .
git commit -m "Initial commit - Student Management System"

# Add your GitHub repo URL
git remote add origin https://github.com/YOUR_USERNAME/student-management-system.git
git push -u origin main
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- Email: your.email@example.com

---

> Built with ❤️ using React, Node.js, and MongoDB

