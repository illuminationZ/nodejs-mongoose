// TODO: routes api

// 1. require express
const express = require('express');

// 2. require ninja model
const Ninja = require('../models/ninja');

// 3. set up express router
const router = express.Router();

// 4. get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });
});

// 5. add a new ninja to the db
router.post('/ninjas', function(req, res, next){
    // var ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// 6. update a ninja in the db
router.patch('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
});

// 7. delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

// 8. export router
module.exports = router;

// 9. test connection
// npm run dev