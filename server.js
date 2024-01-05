const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.get('/', (req, res) => {
    res.status(200).json({ message: 'This is homepage.' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is runing on port ${process.env.PORT}`);
});