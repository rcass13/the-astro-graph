const authAPI = require('./auth.js');
const router = require('express').Router();

router.use('/auth', authAPI);


module.exports = router;