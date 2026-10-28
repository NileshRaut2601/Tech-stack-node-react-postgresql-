// Built-In Middleware 
// Common Built-In Middleware
// express.static()

// ➤ Serves static files like CSS, JS, images.

// ➤ Example: Serves files from a folder (public).



// express.urlencoded()

// ➤ Parses incoming form data (application/x-www-form-urlencoded).

// ➤ Helps you access form data via req.body.

import express from 'express';
import path from 'path';

const app = express();

// Middleware
app.use(express.static('public'));    // public is the folder made by me , and it contain all static files
app.use(express.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
    const filepath = path.resolve('view/home.html');
    res.sendFile(filepath);
});


// Login page
app.get('/login', (req, res) => {
    const filepath = path.resolve('view/login.html');
    res.sendFile(filepath);
});

// Handle form submission
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Login Successfully');
});

app.listen(3200, () => {
    console.log('Server running at http://localhost:3200');
});
