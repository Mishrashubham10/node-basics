const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connect = require('./utils/db');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

// DB CONNECTION
connect();

// PERSON OBJECT
const person = [
    {id: 1, name: 'Shubham Mishra', job: 'Developer'},
    {id: 2, name: 'Ravi Mishra', job: 'Bussiness'},
    {id: 3, name: 'Ujjwal Mishra', job: 'Bussiness'},
    {id: 4, name: 'Swajal Mishra', job: 'Developer'},
    {id: 5, name: 'Sumit Mishra', job: 'Bussiness'},
];

// CORS OPTIONS
const corOptions = {
    origin: 'http://localhost:5173',
}

// INITIALIZING APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors(corOptions));

// ROUTES
app.get('/', (req, res) => {
  res.status(200).json({ message: 'This is homepage.' });
});

app.get('/api/person', (req, res) => {
    res.status(200).json(person);
  });

// LISTENING TO THE SERVER
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});