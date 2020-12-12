const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes for logrows and login
const logrows = require('./routes/api/logrows');
const login = require('./routes/api/login');

const app = express();

// Connect the Database
connectDB();

//use cors
app.use(cors({ origin: true, credentials: true }));

// Initialize Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

//use routes
app.use('/api/logrows', logrows);
app.use('/api/login', login);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));