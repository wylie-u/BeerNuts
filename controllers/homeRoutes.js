const router = require('express').Router();
const path = require('path');
const { Info } = require('../models');
const withAuth = require('../utils/auth');

// gets to the home page WORKS
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// gets the login page WORKS
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  //if (req.session.logged_in) {
  //res.redirect('/profile');
  //return;
  //}
  res.sendFile(path.join(__dirname, '../views/login.html'));
  // method below is for handlebars
  //res.render('login');
});
// gets the about page WORKS (needs html)
router.get('/about', (req, res) => {
  
  //if (req.session.logged_in) {
  //res.redirect('/profile');
  //return;
  //}
  res.sendFile(path.join(__dirname, '../views/about.html'));
  // method below is for handlebars
  //res.render('login');
});

// signup route works 
router.get('/signup', (req, res) => {
  
  
  res.sendFile(path.join(__dirname, '../views/signup.html'));
  // method below is for handlebars
  //res.render('login');
});

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const breweryData = await Info.findAll({
      
//     });

//     // Serialize data so the template can read it
//     const breweries = breweryData.map((brewery) => brewery.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     // res.render('homepage', { 
      
//     // });

//     res.sendFile(path.join(__dirname, '../views/index.html'));
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
