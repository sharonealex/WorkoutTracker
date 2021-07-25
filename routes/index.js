const router = require('express').Router();
const workoutRoutes = require('./api.js')
router.use('/api/', workoutRoutes);
const homeRoutes = require("./home.js");
router.use("/", homeRoutes);

module.exports = router;