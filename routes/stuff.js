const express = require('express');
const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, stuffController.getAllThings);

router.post('/', auth, stuffController.addThing);

router.get('/:id', auth, stuffController.getOneThing);

router.delete('/:id', auth, stuffController.deleteThing);

router.put('/:id', auth, stuffController.updateThing);

module.exports = router;