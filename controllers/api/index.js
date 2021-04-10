const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const brewRoutes = require('./breweryRoutes');
router.use('/users', usersRoutes);
router.use('/brewery', brewRoutes);
module.exports = router;
