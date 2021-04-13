const path = require('path');
const express = require('express');
// const routes = require('./routes');
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// (MPF) Handlebars stuff; I used the npm install express-handlebars and body-parser for handlebars. 
const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ helpers });
const bodyParser = require('body-parser');

// (MPF) This is the link to our public folder so the CSS and JS function will work in handlebars. 
app.use(express.static(__dirname + "/public"));

// (MPF) Body-parser is the Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. REF = https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/#:~:text=Body%2Dparser%20is%20the%20Node,middleware%20before%20you%20handle%20it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// (MPF) Handlebars settings 
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//static assets go here (CSS and javascript)
app.use(express.static(path.join(__dirname, 'public')));


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(routes);




sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});