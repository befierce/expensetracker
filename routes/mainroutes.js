const express = require('express');
const requestcontroller = require('../controllers/maincontroller');
const router = express.Router();

router.post('/', requestcontroller.postDataToTheServer);

router.get('/:id', (req, res, next) => {

});

router.get('/', requestcontroller.getAllDataFromServer);


// router.post('/', (req, res, next) => {

// });



module.exports = router;