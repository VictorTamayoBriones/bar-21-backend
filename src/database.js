const mongoose = require('mongoose');

const URI = process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost/bar21Test';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('DB id connected');
});