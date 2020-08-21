const express = require('express');
const stuffController = require('../controllers/stuff');
const router = express.Router();

router.get('/', stuffController.getAllThings);

router.post('/', stuffController.addThing);

router.get('/:id', stuffController.getOneThing);

router.delete('/:id', stuffController.deleteThing);

router.put('/:id', stuffController.updateThing);

module.exports = router;