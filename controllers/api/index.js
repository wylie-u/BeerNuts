const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/homeRoutes', userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;