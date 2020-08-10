const router = require('express').Router();
const groupController = require('../controllers/group.controller');

router.post('/groups', groupController.createGroup);
router.get('/groups', groupController.viewGroups);
router.get('/groups/:id', groupController.viewGroupById);
router.put('/groups/:id', groupController.updateGroupById);
router.delete('/groups/:id', groupController.deleteGroupById);

module.exports = router;