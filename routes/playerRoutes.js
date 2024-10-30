const express = require('express');
const { loginPlayer, processCombat } = require('../controllers/playerController');
const router = express.Router();

router.post('/login', loginPlayer);
router.post('/combat', processCombat);

module.exports = router;
