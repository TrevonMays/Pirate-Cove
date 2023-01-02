const Pirate = require('../models/pirate.model');

const getAllPirates = (_, res) => {
    Pirate.find()
        .then((Pirates) => res.status(200).json(Pirates))
        .catch((err) => res.status(400).json(err));
};

const getOnePirate = (req, res) => {
    Pirate.findById({ _id: req.params.id })
        .then((Pirate) => res.status(200).json(Pirate))
        .catch((err) => res.status(400).json(err));
};

const insertPirate = (req, res) => {
    Pirate.create(req.body)
        .then((Pirate) => res.status(201).json(Pirate))
        .catch((err) => res.status(400).json(err));
};

const updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((Pirate) => res.status(201).json(Pirate))
        .catch((err) => res.status(400).json(err));
};

const editPirate = (req, res) => {
    Pirate.findbyIdandEdit()
}

const deletePirate = (req, res) => {
    Pirate.findByIdAndDelete({ _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    getAllPirates,
    getOnePirate,
    insertPirate,
    updatePirate,
    editPirate,
    deletePirate,
};