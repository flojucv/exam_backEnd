const express = require('express');
const router = express.Router();
const blague = require('./../controllers/Blague');

router.get('/blague', blague.allBlague);
router.get('/blague/random', blague.randomBlague);
router.get('/blague/:id', blague.findBlague);
router.get('/test', () => {console.log("test")})

module.exports = router;