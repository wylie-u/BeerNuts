const path = require('path');
const express = require('express');
<<<<<<< HEAD
const routes = require('./routes');
=======
// const routes = require('./routes');
const routes = require('./controllers');
>>>>>>> 74dbbf96c562d4d439ca83df756d868be6a06ff6

const sequelize = require('../project2/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD

=======
//static assets go here (CSS and javascript)
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 74dbbf96c562d4d439ca83df756d868be6a06ff6
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
  });