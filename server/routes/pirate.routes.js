const express = require('express');
const PirateRouter = express.Router();
const {
    getAllPirates,
    getOnePirate,
    insertPirate,
    updatePirate,
    deletePirate,
} = require('../controllers/pirate.controller');

// /api/Pirates
PirateRouter.route('/')
    .get(getAllPirates)
    .post(insertPirate);

// /api/Pirates/:id
PirateRouter.route('/:id')
    .get(getOnePirate)
    .put(updatePirate)
    .delete(deletePirate);

module.exports = PirateRouter;