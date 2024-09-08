const express = require('express');
const cardController = require('../controllers/cardController');
const router = express.Router();

router.get('/home', cardController.home);
router.get('/cards/search', cardController.searchCardsByName);

module.exports = router;