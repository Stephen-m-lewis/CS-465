const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

router.get('/', travelController.travel);
router.get('/json', travelController.tripsJSON);

module.exports = router;
