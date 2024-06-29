const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./config/dbconnect');
const authroutes = require('./routes/Auth');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/auth',authroutes);   
app.use('/api/facilities', require('./routes/Facilities'));
app.use('/api/bookings', require('./routes/Booking'));
app.use('/api/Maintenances', require('./routes/Maintenance'));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
db.connect(); 
