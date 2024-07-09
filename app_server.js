const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRouter = require('./routers/userRouter');
app.use('/api/users', userRouter);

// Root route handler
app.get('/', (req, res) => {
    res.send('Welcome to the User Registration API');
});


module.exports = app;
