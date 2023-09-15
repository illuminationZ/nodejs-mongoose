// TODO: step by step for node.js and express.js with mongoose to test connection

// 1. require express
const express = require('express');

// 2. require mongoose
const mongoose = require('mongoose');

// 3. require body-parser
const bodyParser = require('body-parser');

// 4. require routes
const routes = require('./src/routes/api');

// 5. set up express app
const app = express();

// 6. connect to mongodb
mongoose.connect('mongodb://localhost:27017/ninjago');

// 7. use body-parser
app.use(bodyParser.json());

// 8. initialize routes
app.use('/api', routes);

// 9. error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
});

// 10. listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests http://localhost:4000');
});

// 11. test connection
// node app.js
