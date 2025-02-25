const Note = require('../models/Note');

const createNote = async (req, res) => {
    try {
        const note = new Note({
            ...req.body,
            owner: req.user._id
        });

        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ owner: req.user._id });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNote = async (req, res) => {
    try {
        const note = await Note.findOne({
            _id: req.params.id,
            owner: req.user._id
        });

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateNote = async (req, res) => {
    try {
        const note = await Note.findOne({
            _id: req.params.id,
            owner: req.user._id
        });

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        Object.assign(note, req.body);
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
        });

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
};
