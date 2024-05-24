const express = require('express');
const router = express.Router();
const Property = require('../models/property');


router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Создание нового объекта
router.post('/', async (req, res) => {
    const property = new Property({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location
    });

    try {
        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Удаление объекта
router.delete('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        await property.remove();
        res.json({ message: 'Property deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Поиск по городу
router.get('/search/:location', async (req, res) => {
    try {
        const properties = await Property.find({ location: req.params.location });
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
