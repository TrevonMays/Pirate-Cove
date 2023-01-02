const mongoose = require('mongoose');

const PirateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Title is required.'],
        minLength: [3, 'Title must be at least three characters.']
    },
    position: {
        type: String,
        required: [true, 'Position is required.'],
       
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minLength: [3, 'Description must be at least three characters.']
    },
    treasure: {
        type: String,
        required: [true, 'Treasure is required.'],
        minLength: [0, 'Treasure must choosen.']
    },

    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    },
        pegLeg: {
        type: Boolean,
    },


}, { timestamps: true });

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;