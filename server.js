const path = require('path');
const express = require('express');
// const routes = require('./routes');
const routes = require('./controllers');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// (MPF) Handlebars stuff; I used the npm install express-handlebars and body-parser for handlebars. 
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// (MPF) This is the link to our public folder so the CSS and JS function will work in handlebars. 
app.use(express.static(__dirname + "/public"));

// (MPF) Body-parser is the Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. REF = https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/#:~:text=Body%2Dparser%20is%20the%20Node,middleware%20before%20you%20handle%20it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// (MPF) Handlebars settings 

//setting views pathway
app.set('views', path.join(__dirname, 'views/'));

//setting engine for hbs
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: __dirname + 'views/layouts'
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//static assets go here (CSS and javascript)
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


sequelize.sync({
  force: false
}).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});