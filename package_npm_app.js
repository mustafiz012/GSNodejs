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

app.get('/example', (req, res) => {
    res.send('This is /example route')
});
/*
use 'route' params when it's urgent otherwise 'query' params
* */
app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);    //localhost:3000/example/Musta/25
    console.log(req.query);     //localhost:3000/example/Musta/25?name=Musta&age=25
    res.send(req.params.name + " : " + req.params.age)
});

//serving static files using express
const path = require('path');
//using middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html'))
});

//post request with express and body parser module
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.get('/secureLogin', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', '/login/index.html'))
});

app.post('/attemptLogin', (req, res) => {
    console.log(req.body);
    //database work here
    res.send('Successfully posted data')
});

app.listen(3010, () => {
    console.log('App listening on port 3010')
});