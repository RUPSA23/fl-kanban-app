const path = require('path');
const express = require('express');

const devController = require('../controllers/developer');
const isAuth = require('../middleware/is-auth');
const { body } = require('express-validator');

const router = express.Router();

router.get('/developer', isAuth, devController.getdeveloper);

router.get('/subscription/:resourceId', isAuth, devController.subscription);
//subscription 
router.get('/myRecords', isAuth, devController.myRecords);
router.get('/Completed/:resourceId', devController.completeTask);
module.exports = router;