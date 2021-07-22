const path = require('path');
const express = require('express');

const kanbanController = require('../controllers/kanban');
const isAuth = require('../middleware/is-auth');
const { body } = require('express-validator');

const router = express.Router();

router.get('/',  kanbanController.getResources);

router.get('/addResource', isAuth, kanbanController.getaddResource);

router.get('/admin/resources', isAuth, kanbanController.getAdminResources);

router.get('/admin/history', isAuth, kanbanController.getAdminHistory);

router.post('/kanbanApproval', isAuth, kanbanController.approvedKanban);

router.post('/addResource',
// [
//     body('title')
//       .isString()
//       .isLength({ min: 1 })
//       .trim(),
//     body('imageUrl').isURL(),
//     body('kanban')
//       .isLength({ min: 1, max: 400 })
//       .trim()
//   ],
kanbanController.postaddResource);

router.post('/delete-resource', kanbanController.postDeleteResource);

router.get('/update-resource/:kanbanId', isAuth, kanbanController.getEditResource);

router.get('/resource', isAuth,  kanbanController.getSearch);

router.post('/update-resource',
// [
//     body('title')
//       .isString()
//       .isLength({ min: 1 })
//       .trim(),
//     body('imageUrl').isURL(),
//     body('kanban','Minimum character should be 1')
//       .isLength({ min: 1, max: 400 })
//       .trim()
//   ],
kanbanController.postEditResource);

module.exports = router;