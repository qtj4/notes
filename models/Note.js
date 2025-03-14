const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['text', 'drawing', 'tasklist'],
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;