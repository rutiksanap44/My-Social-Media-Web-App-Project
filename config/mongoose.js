const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost/my_social');

const db = mongoose.connection;

db.on('error',console.error .bind(console,"Error Connecting to MongoDB"));

db.once('open',function(){
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;
