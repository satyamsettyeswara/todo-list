const express = require('express');
const router = express.Router();

const home = require('../controllers/todo');

router.get('/',home.main);
router.post('/create-task',home.create1);
router.get('/delete-task',home.delete);
module.exports = router;