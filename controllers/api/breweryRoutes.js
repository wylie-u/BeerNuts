const router = require('express').Router();
const { Info } = require('../../models');

router.post('/', (req, res) => {
  Info.create({
    city_name: req.body.city_name,
    name: req.body.name,
    location: req.body.location,
    phone_number: req.body.phone_number,
    food: req.body.food,
    outdoor_seating: req.body.outdoor_seating,
    website: req.body.website,
  })
    .then((newBrewery) => {
      res.json(newBrewery);
    })
    .catch((err) => {
      res.json(err);
    });
});

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
    const breweryData = await Info.findByPk(req.params.id);
    const brewery = breweryData.get({ plain: true });

    res.status(200).json(brewery);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/city/:city_name', (req, res) => {
  console.log(req.params.city_name);
  Info.findAll({
    where: {
      city_name: req.params.city_name,
    },
  })

    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
