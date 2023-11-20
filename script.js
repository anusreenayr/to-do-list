// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3000;

// Use middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
