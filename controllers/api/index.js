const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/users', usersRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
