const express = require('express');
const router = express.Router();

const membersController = require('../controllers/members.controller');

router.get('/', membersController.getAllMembers);

router.get('/:id', membersController.getAMember);

router.post('/', membersController.createAMember);

router.put('/:id', membersController.updateAMember);

router.delete('/:id', membersController.deleteAMember);

module.exports = router;
