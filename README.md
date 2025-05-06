# Dockerized  Chores App

This is a full-stack Chores management application built with React (frontend), Express.js (backend), and MongoDB (database). The application allows users to add and delete chores from a list. The entire app is containerized using Docker, enabling easy deployment and consistent development environments.

## Features

* Add a new chore to the list
* Delete existing chores
* Clean and responsive user interface
* Dockerized for local development and deployment

## Technology Stack

* **Frontend**: React
* **Backend**: Express.js
* **Database**: MongoDB
* **Containerization**: Docker, Docker Compose

---

## Project Structure

```
.
├── backend/            # Express server and API routes
│   ├── index.js
│   ├── models/
│   └── package.json
├── frontend/           # React app
│   ├── src/
│   └── package.json
├── docker-compose.yml  # Docker Compose configuration
└── README.md
```

---

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

* [Docker](https://www.docker.com/)
* [Node.js & npm](https://nodejs.org/) (optional, for running without Docker)

---

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AdityaPGit/Dockerized-Chores-App.git
   cd Dockerized-Chores-App
   ```

2. **Install Dependencies**

   Open two terminals or navigate into each folder separately:

   **In the `frontend` directory:**

   ```bash
   cd frontend
   npm install
   ```

   **In the `backend` directory:**

   ```bash
   cd backend
   npm install
   ```

3. **Start the Application using Docker**

   From the root of the project:

   ```bash
   docker-compose up --build
   ```

   This will:

   * Build and run the React frontend on `http://localhost:3000`
   * Start the Express backend on `http://localhost:5001`
   * Start a MongoDB container on the default port

---

## Development Notes

* The frontend is configured to proxy API requests to the backend using the `proxy` field in `frontend/package.json`.
* MongoDB connection string is set in `backend/index.js` to connect with the containerized MongoDB service using the hostname `mongo`.

---

## License

This project is licensed under the [MIT License](https://github.com/AdityaPGit/Dockerized-Chores-App/blob/main/LICENSE)

---