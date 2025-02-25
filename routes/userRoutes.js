const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const { validateUserUpdate } = require('../middleware/validation');
const { checkRole } = require('../middleware/roleCheck');

router.use(auth);

router.get('/profile', userController.getProfile);
router.put('/profile', validateUserUpdate, userController.updateProfile);


router.get('/all', checkRole(['admin']), userController.getAllUsers);
router.delete('/:id', checkRole(['admin']), userController.deleteUser);
router.put('/:id', checkRole(['admin']), userController.updateUser);

module.exports = router;