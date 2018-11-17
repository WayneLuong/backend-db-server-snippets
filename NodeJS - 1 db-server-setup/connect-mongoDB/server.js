const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB Config - get keys object
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res)=>{
    res.send('Hello World')
});

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`server running on port ${port}`));

