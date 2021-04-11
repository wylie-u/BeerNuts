const router = require('express').Router();
const { Info } = require('../../models');

router.get('/', (req, res) => {
  Info.findAll({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});






module.exports = router;

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
