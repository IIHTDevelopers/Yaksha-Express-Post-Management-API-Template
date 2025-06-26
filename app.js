const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample collection data for posts
let posts = [
  { id: 1, title: "Hello World", content: "This is my first post." },
  { id: 2, title: "Node.js Rocks", content: "Express makes Node.js easy!" },
  { id: 3, title: "JavaScript Tips", content: "Always use === instead of ==." },
  { id: 4, title: "Async/Await", content: "Asynchronous code made cleaner." },
  { id: 5, title: "REST APIs", content: "Building APIs with REST principles." }
];

// Root route

// GET posts with filter (by title or content)

// GET all posts

// GET a single post by ID

// POST a new post

// PUT update an existing post by ID

// DELETE a post by ID

// Catch-all route for invalid URLs

module.exports = app;
