const express = require('express');
const router = express.Router();
const messagesController = require("./../controllers/messages.js");

router.get('/', messagesController.getAll); //functie binnen controller
router.post('/', messagesController.create);

module.exports = router;