const router = require('express').Router();
const { Info } = require('../../models');


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

//     res.sendFile(path.join(__dirname, '/views/index.html'));
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', (req, res) => {
    
    Info.findAll({
      
    })
    .then((results => {
      res.json(results)
    }))
    .catch(err => {
      console.log(err);
    })
  });

// router.get('/Info/:id', async (req, res) => {
//     try {
//       const breweryData = await Info.findByPk(req.params.id, {
        
//       });
  
//       const brewery = breweryData.get({ plain: true });
  
//     //   res.render('project', {
//     //     ...project,
//     //     logged_in: req.session.logged_in
//     //   });
//     res.sendFile(path.join(__dirname, '../breweryData'));
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });