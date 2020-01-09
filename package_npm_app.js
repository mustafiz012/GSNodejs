// ==>> Creating package.json using npm init
/*const _ = require('lodash');
let example = _.fill([1, 2, 3, 4, 5], "banana", 3, 5);

console.log(example);*/

// ==>> Getting started with Express framework (Web framework)
const express = require('express');
const app = express();

//GET request
app.get('/', (req, res) => {
    res.send('Hello from express root route')
});

app.get('/example', (req, res)=>{
    res.send('This is /example route')
});

app.listen(3000);