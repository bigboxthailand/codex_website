# CryptoClock Demo

This repository contains a minimal demo of a CryptoClock web shop. It includes a simple frontend and backend structure to help you start development.

## Project Structure

```
frontend/   Static HTML/CSS/JS files
backend/    Express API with MongoDB (Mongoose)
```

## Requirements

- Node.js 18+
- MongoDB running locally or remote

## Setup

### Backend

```
cd backend
cp .env.example .env
npm install
npm start
```

The API will start on `http://localhost:3001`.

### Frontend

Since the frontend is static, you can open the HTML files directly in the browser or serve them using any web server. For development you can run a simple server:

```
cd frontend
npx http-server -c-1
```

Then open `http://localhost:8080/index.html`.

## Deployment

Deploy the backend to any Node-friendly host (Heroku, Railway, etc.) and host the static frontend on platforms like Netlify or Vercel. Update API URLs in the JavaScript as needed.

## Notes

Authentication and payment logic are not implemented in this demo. They would require integrating third-party services such as OAuth providers and payment gateways.
