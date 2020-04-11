const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

PORT = process.env.PORT || 5000;

app.get('/', (req,res) => res.send('API is running'))

app.listen(PORT, console.log(`Server started on ${PORT}`))