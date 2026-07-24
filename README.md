# CMS Assignment

## Project Overview

This project is a full-stack Content Management System (CMS) developed as part of the Frontend Engineering Assignment.

The application enables administrators to securely manage website content through an admin dashboard. The public-facing website retrieves its content dynamically from the backend APIs instead of using hardcoded data.

---

# Technology Stack

## Frontend

* Next.js
* React
* Redux Toolkit
* React Hook Form
* Axios
* Tailwind CSS
* React Toastify

## Backend

* Node.js
* Express.js
* JWT Authentication
* Mongoose

## Database

* MongoDB

## Infrastructure

* Docker (used for local MongoDB development)

---

# Features

## Authentication

* Admin Login
* Admin Logout
* JWT-based Authentication
* Protected Dashboard

## Content Management

* Create Page
* View Pages
* Update Page
* Delete Page

Each page contains:

* Title
* Slug
* Content
* Status

---

# Public Website

The public homepage retrieves CMS content dynamically from the backend APIs.

No content is hardcoded in the frontend.

---

# State Management

Redux Toolkit is used to manage:

* Authentication state
* CMS page state

Component-local state is used where global state is unnecessary.

---

# Project Structure

```text
cms-assignment
│
├── backend
│   ├── src
│   ├── package.json
│   └── Docker configuration
│
├── frontend
│   ├── src
│   ├── app
│   ├── redux
│   ├── services
│   └── package.json
│
└── README.md
```

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Docker (MongoDB)

Start the MongoDB Docker container before running the backend.

---

# Environment Variables

Backend `.env`

```env
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

---

# Sample Admin Credentials

Email:

```text
admin@example.com
```

Password:

```text
admin123
```

Replace these with the credentials you created using your seed script if they are different.

---

# API Endpoints

## Authentication

* POST `/api/auth/login`

## Pages

* GET `/api/pages`
* POST `/api/pages`
* PUT `/api/pages/:id`
* DELETE `/api/pages/:id`

---

# Architecture Decisions

* Express.js was selected for a lightweight REST API.
* MongoDB was chosen because the content model is flexible and can evolve over time.
* Redux Toolkit manages shared application state.
* JWT is used for stateless authentication.
* The application separates frontend and backend concerns for better scalability and maintainability.

---

# Assumptions

* Only authenticated administrators can manage content.
* Public users can only view published content.
* MongoDB is available before starting the backend.

---

# Future Improvements

* Rich Text Editor
* Image Uploads
* Search
* Pagination
* Role-Based Access Control
* Content Versioning
* Draft/Publish Workflow

---

# Author

**Vasanth Kusetti**
