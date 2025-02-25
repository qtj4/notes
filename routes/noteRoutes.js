const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const auth = require('../middleware/auth');  // Import auth directly
const { checkRole } = require('../middleware/roleCheck');
const Note = require('../models/Note');

router.use(auth);

router.post('/', noteController.createNote);
router.get('/', noteController.getNotes);
router.get('/:id', noteController.getNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

router.get('/admin/all',
    checkRole(['admin']),
    async (req, res) => {
        try {
            const notes = await Note.find({}).populate('owner', 'username email');
            res.json(notes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

module.exports = router;
