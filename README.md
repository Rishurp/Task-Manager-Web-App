

# Task Manager Web App

The **Task Manager Web App** is a full-stack application that allows users to manage tasks. It includes backend APIs to handle task creation, updating, deletion, and retrieval, along with a frontend for interacting with tasks via a user-friendly interface. This project also supports file uploads, allowing users to upload and download PDF files related to tasks.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Backend](#backend)
- [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployed Link](#deployed-link)
- [License](#license)

---

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Multer
- **Frontend**: React.js, Tailwind CSS, Material-UI, Axios
- **Environment Variables**: dotenv
- **Package Manager**: npm

---

## Features

- **Task Management**: Create, update, delete, and fetch tasks.
- **File Upload**: Users can upload PDF files related to tasks, which can then be downloaded.
- **Frontend UI**: A clean interface built with Material-UI and Axios to handle API requests.

---

## Backend

### Description

The backend is built using **Node.js** and **Express.js**, with **MongoDB** as the database. It handles user task data, allows for file uploads using **Multer**, and uses an **env** file to securely store the MongoDB URL connection string.

### Key Packages

- `express`: Handles routing and request processing.
- `mongoose`: Handles MongoDB object modeling.
- `multer`: Handles file uploads, particularly PDFs.
- `dotenv`: Loads environment variables from a `.env` file.
- `nodemon`: Development tool for automatically restarting the server.
- `axios`: Used for making HTTP requests in both frontend and backend.

### Environment Variables

- **MONGODB_URL**: The connection string for MongoDB is stored in the `.env` file.

---

## Frontend

### Description

The frontend is developed using **React.js** with **Material-UI** for creating a table and modal to display and manage tasks. **Axios** is used to handle HTTP requests to the backend APIs.

### Key Packages

- `@mui/material`: Material-UI for building responsive components.
- `axios`: Used to send HTTP requests to the backend.
- `vite`: For building and serving the frontend code.
- `tailwindcss`: Used for additional styling.

---

## API Endpoints

### POST /v1/tasks
- **Description**: Add a new task.
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "deadline": "2024-10-15",
    "status": "TODO"
  }
  ```
  
### GET /v1/tasks
- **Description**: Retrieve all tasks.

### PATCH /v1/tasks/:id
- **Description**: Update an existing task.
- **Route Parameter**: `id` (The ID of the task to update).
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Description"
  }
  ```

### DELETE /v1/tasks/:id
- **Description**: Delete a task.
- **Route Parameter**: `id` (The ID of the task to delete).

### PDF Upload with Multer
- **Description**: Users can upload PDFs related to tasks, and they can be downloaded later.

---

## Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js**: [Node.js download link](https://nodejs.org/)
- **MongoDB**: [MongoDB download link](https://www.mongodb.com/)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rishurp/Task-Manager-Web-App.git
   cd Task-Manager-Web-App
   ```

2. **Backend Setup**:

   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file** in the backend folder and add your MongoDB connection string:

   ```env
   MONGODB_URL=your_mongodb_url
   ```

4. **Start the backend server**:

   ```bash
   npm start
   ```

5. **Frontend Setup**:

   ```bash
   cd frontend
   npm install
   ```

6. **Start the frontend**:

   ```bash
   npm run dev
   ```

The app will now be running locally at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

---

## Usage

1. **Create tasks**: Add new tasks from the frontend using the provided form.
2. **View tasks**: All tasks will be displayed in a table format.
3. **Update tasks**: Click on a task to update its details.
4. **Delete tasks**: Remove tasks you no longer need.
5. **Upload PDFs**: Attach a PDF to a task for download later.

---

## Screenshots

Here's a preview of the Task Manager Web App:

![Screenshot (344)](https://github.com/user-attachments/assets/30461e5d-6d84-4d9f-b85d-6e1419e37715)
![Screenshot (354)](https://github.com/user-attachments/assets/448bbb49-9fd3-4d09-8221-c73492fce485)
![Screenshot (355)](https://github.com/user-attachments/assets/35ae5365-1d9e-42b6-800f-7eaa9b77f20e)
![Screenshot (356)](https://github.com/user-attachments/assets/4145672b-1b0d-4f84-81ef-be868a8ab195)
![Screenshot (357)](https://github.com/user-attachments/assets/d9f9ed4a-304d-47b4-8970-a25520e5a1f4)
![Screenshot (358)](https://github.com/user-attachments/assets/5f7dcd47-5372-4b31-80ca-8b50cec579b4)

---

## Deployed Link

You can access the live version of the Task Manager Web App here:

[Task Manager Web App](https://task-manager-web-app-rishupandey.vercel.app/)

---

## License

This project is licensed under the MIT License.
