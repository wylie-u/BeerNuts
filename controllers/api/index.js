const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const breweryRoutes = require('./breweryRoutes');

router.use('/users', usersRoutes);
// router.use('/Info', breweryRoutes);

module.exports = router;
