//Require the modules
const express = require('express');

const app = express();

//Request and responses from server
app.get('/', (req, res)=>{
    res.send('Hello World')
});

//Sets the port to 5000 or deployment port
const port = process.env.port || 5000;

//start server
app.listen(port, ()=> console.log(`server running on port ${port}`));

