const mongoose = require('mongoose');
const Property = require('./models/property');

mongoose.connect('mongodb://localhost:27017/realestate', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        return Property.deleteMany({});
    })
    .then(() => {
        console.log('All properties deleted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error deleting properties', err);
        mongoose.connection.close();
    });
