const express = require('express');
const cors = require('cors');
const app = express();


//settings
app.set('port', process.env.PORT || 4000);

//Midlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users'));

module.exports = app;