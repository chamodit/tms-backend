const router = require('express').Router();
const workController = require('../controllers/work.controller');

router.post('/works', workController.createWork);
router.get('/works', workController.viewWork);
router.put('/works/:id', workController.updateWork);
router.delete('/works/:id', workController.deleteWork);

module.exports = router;