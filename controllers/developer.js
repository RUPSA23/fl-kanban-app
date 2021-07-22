const kanbanCollection = require('../models/kanban');
// const {
//   validationResult
// } = require('express-validator/check');

const {
  validationResult
} = require('express-validator');
const kanban = require('../models/kanban');



exports.getdeveloper = (req, res, next) => {
  kanbanCollection.find()
    .then(resources => {
      res.render('kanban/allkanban', {
        allResources: resources,
        pageTitle: 'All Kanbans',
        path: '/developer',
        editing: false,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      console.log(err);
    });
};


exports.subscription = (req, res, next) => {
  let kanban = req.params.resourceId;
  update_with = {
    developerAssigned: req.user._id,
    kanban_subscribed_at: Date.now(),
    status: "assigned"
  }

  kanbanCollection.findByIdAndUpdate(kanban, update_with, function (err, doc) {
    if (err) return res.send(500, {
      error: err
    });
    return res.redirect('/');
  });
}



exports.myRecords = (req, res, next) => {
    kanbanCollection.find({
      developerAssigned: req.user._id
    })
      .then(resources => {
          res.render('kanban/mykanbans', {
            allResources: resources,
            pageTitle: 'All Kanbans',
            path: '/myRecords',
            editing: false,
            hasError: false,
            errorMessage: null,
            validationErrors: []
          })
        })
      }

exports.completeTask = (req, res, next) => {
  let kanban = req.params.resourceId;
  update_with = {
    kanban_completed_at: Date.now(),
    status: "completed"
  }

  kanbanCollection.findByIdAndUpdate(kanban, update_with, function (err, doc) {
    if (err) return res.send(500, {
      error: err
    });
    return res.redirect('/myRecords');
  });
}




      



     
