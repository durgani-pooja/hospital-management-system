FULL STACK APP

# 🏥 Hospital Management System

A full-stack web application to manage hospital operations — built with **React**, **Node.js + Express**, and **MongoDB**.

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/Node.js-18%2B-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)
![Status](https://img.shields.io/badge/status-active-success)

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
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 📖 About the Project

The **Hospital Management System** is a full-stack CRUD application designed to streamline hospital operations. It allows hospital staff to:

- Register and manage patient records
- Add and manage doctors and their departments
- Schedule and track appointments
- Manage hospital departments and wards
- View all records in a clean, responsive dashboard

All data is stored persistently in **MongoDB**. The frontend communicates with the backend via a **REST API** built using **Express.js**.

---

## 🛠 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React.js             |
| Backend      | Node.js + Express    |
| Database     | MongoDB (Mongoose)   |
| HTTP Client  | Axios                |
| Dev Tool     | Nodemon              |
| IDE          | Cursor               |

---

## ✨ Features

- ✅ Add, View, Edit, and Delete **Patients**
- ✅ Manage **Doctors** and their specializations
- ✅ Schedule and manage **Appointments**
- ✅ Manage **Departments** in the hospital
- ✅ Data persists in MongoDB
- ✅ REST API with full CRUD support
- ✅ CORS-enabled for local development
- ✅ Responsive UI built with React

---

## 📁 Project Structure

```
hospital-management-system/
│
├── backend/
│   ├── models/
│   │   ├── Patient.js           # Patient Mongoose schema
│   │   ├── Doctor.js            # Doctor Mongoose schema
│   │   ├── Appointment.js       # Appointment Mongoose schema
│   │   └── Department.js        # Department Mongoose schema
│   ├── routes/
│   │   ├── patientRoutes.js     # Patient API routes
│   │   ├── doctorRoutes.js      # Doctor API routes
│   │   ├── appointmentRoutes.js # Appointment API routes
│   │   └── departmentRoutes.js  # Department API routes
│   ├── .env                     # Environment variables
│   ├── server.js                # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── hospitalAPI.js   # Axios API calls
│   │   ├── components/
│   │   │   ├── PatientForm.js   # Add / Edit patient form
│   │   │   ├── PatientList.js   # Table of patients
│   │   │   ├── DoctorForm.js    # Add / Edit doctor form
│   │   │   ├── DoctorList.js    # Table of doctors
│   │   │   └── Navbar.js        # Navigation bar
│   │   ├── pages/
│   │   │   ├── Dashboard.js     # Home dashboard
│   │   │   ├── Patients.js      # Patients page
│   │   │   ├── Doctors.js       # Doctors page
│   │   │   └── Appointments.js  # Appointments page
│   │   ├── App.js               # Root component
│   │   └── index.js
│   └── package.json
│
├── .gitignore
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

To verify installations, open your terminal and run:

```bash
node --version
npm --version
git --version
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/durgani-pooja/hospital-management-system.git
cd hospital-management-system
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=mongodb://localhost:27017/hospitalDB
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

Base URL: `http://localhost:5000/api`

### 🧑‍⚕️ Patients

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/patients`          | Get all patients         |
| GET    | `/patients/:id`      | Get a single patient     |
| POST   | `/patients`          | Register a new patient   |
| PUT    | `/patients/:id`      | Update patient details   |
| DELETE | `/patients/:id`      | Delete a patient         |

### 👨‍⚕️ Doctors

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/doctors`           | Get all doctors          |
| GET    | `/doctors/:id`       | Get a single doctor      |
| POST   | `/doctors`           | Add a new doctor         |
| PUT    | `/doctors/:id`       | Update doctor details    |
| DELETE | `/doctors/:id`       | Remove a doctor          |

### 📅 Appointments

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| GET    | `/appointments`       | Get all appointments      |
| POST   | `/appointments`       | Book a new appointment    |
| PUT    | `/appointments/:id`   | Update an appointment     |
| DELETE | `/appointments/:id`   | Cancel an appointment     |

---

### Sample Request Body — Patient (POST / PUT)

```json
{
  "name": "Anjali Sharma",
  "email": "anjali@example.com",
  "age": 28,
  "gender": "Female",
  "phone": "9876543210",
  "disease": "Fever",
  "doctorAssigned": "Dr. Ravi Kumar"
}
```

### Sample Response

```json
{
  "_id": "64abc123def456",
  "name": "Anjali Sharma",
  "email": "anjali@example.com",
  "age": 28,
  "gender": "Female",
  "phone": "9876543210",
  "disease": "Fever",
  "doctorAssigned": "Dr. Ravi Kumar",
  "admissionDate": "2024-01-15T10:30:00.000Z"
}
```

---

## 🔐 Environment Variables

The backend requires the following environment variables in `backend/.env`:

| Variable    | Description                    | Default                                   |
|-------------|--------------------------------|-------------------------------------------|
| `MONGO_URI` | MongoDB connection string      | `mongodb://localhost:27017/hospitalDB`    |
| `PORT`      | Port for the Express server    | `5000`                                    |

> ⚠️ Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

---

## 🚀 Pushing Updates to GitHub

```bash
git add .
git commit -m "your commit message here"
git push origin main
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

## 👩‍💻 Author

**Pooja Durgani**
- GitHub: [@durgani-pooja](https://github.com/durgani-pooja)
- Email: poojadurgani4@gmail.com

---

> Built with ❤️ using React, Node.js, and MongoDB
