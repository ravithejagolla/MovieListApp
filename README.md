# 🎬 Movie Explorer –  Movie App

## Introduction
Movie Explorer is a full-stack movie browsing app that allows users to discover, search, and view detailed information about movies. It fetches data from The Movie Database (TMDb) API and supports additional backend functionality such as user management, favorites, or reviews (if implemented). The app offers a sleek user experience with a responsive interface and dynamic content.

## Project Type
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express ,Mongodb

## Deployed App
- 🌐 **Frontend**: [https://moviapp-4.netlify.app/](https://moviapp-4.netlify.app/)  
- 🌐 **Backend**: [https://movielistapp-3.onrender.com](https://movielistapp-4.onrender.com/movie)

---

## Directory Structure
MovieListApp/
├── Backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ ├── .env
│ ├── package.json
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.js
│ │ ├── index.js
│ ├── .env
│ ├── package.json
├── README.md

## Installation & Getting Started

### Frontend Setup
```bash
# Navigate to frontend directory
cd Frontend/movieapp

# Install dependencies
npm install

# Start frontend
npm run dev

# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create a .env file and add required configurations (e.g., DB URI, PORT)

# Start backend server
npm run dev

GET /movie/get-:id – Get a movie by ID
PUT /movie/update-movie/:id – Update a movie by ID
POST /movie/create-movie – Create a new movie
DELETE /movie/delete-movie/:id – Delete a movie by ID
