const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOver = require('method-override');
const path = require('path');

const app = express();

//middleware needed to be used on the project
app.use(logger('dev'));
app.use(methodOver('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set up ejs as a view engine and set up a path to a folder
//with graphic to render
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/about', (req, res) => {
  res.render('index', {
    message: 'ok',
    title: 'Hello, welcome to the server'
  });
})

app.get('/', (req, res) => {
  res.render('index', {
    message: 'ok',
    title: 'Hello, welcome to the server'
  });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', {
    message: 'ok',
    title: 'Hello, welcome to the server'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});

const routeCities = require('./route/routes');

app.use('/sights', routeCities);

app.get('*', (req, res) => {
    console.log('I am crashed. Wrong path');
    res.status(404).send('something goes wrong');
})
