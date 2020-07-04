// Import dependencies.
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import endpoints from './api/endpoints.js';

// Lookup server configuration variables.
const PORT = process.env.PORT || 8080;

// Intialise the express web server.
const app = express();
app.use(bodyParser.json());

// Make all static content in the web folder available via their file names.
app.use(express.static(path.resolve('./app/web')));

// Register API endpoints handlers.
app.use(endpoints);

// Handle requests made to files not avaible in the app.
app.use((req, res) => {

	res.status(404).send('Not found');
});

// Catch and gracefully respond to unhandled exceptions.
app.use((err, req, res, next) => {

	console.error(err.stack);

	res.status(500).send('Unhandled exception. Review code for errors.');
});

// Start the web server.
app.listen(PORT, () => console.log(`Listening on ${PORT}`));