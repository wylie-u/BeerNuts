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

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const breweryData = await Info.findByPk(req.params.id)
    const brewery = breweryData.get({ plain: true });

    res.status(200).json(brewery);
  }catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:city_name', (req, res) => {
 Info.findAll({ where: { 
    city_name: req.params.city_name
 } })

    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});




// router.get('/:id', async (req, res) => {
//   // find a single product by its `id`
//   try {
//     const breweryData = await Info.findByPk({
//       where: {
//         id: req.params.id,
//       },
//       // be sure to include its associated Category and Tag data
      
//     });
//     if (!breweryData) {
//       res.status(404).json({ message: 'No product found with this id!' });
//       return;
//     }
//     res.status(200).json(breweryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const breweryData = await Info.findByPk(req.params.id, {
//       include: [
//         {
//           attributes: ['name'],
//         },
//       ],
//     });

//     const brewery = breweryData.get({ plain: true });

//     res.status(200).json(breweryData);
//   }catch (err) {
//     res.status(400).json(err);
//   }
 
// });

module.exports = router;