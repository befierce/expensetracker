const express = require('express');
const requestcontroller = require('../controllers/maincontroller');
const router = express.Router();

router.post('/', requestcontroller.postDataToTheServer);

router.delete('/:id', requestcontroller.deleteDataFromServer);

router.get('/', requestcontroller.getAllDataFromServer);

router.get('/:id', requestcontroller.getSingleDataFromServer)



module.exports = router;