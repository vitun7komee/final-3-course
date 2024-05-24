
const mongoose = require('mongoose');
const Property = require('./models/property');

mongoose.connect('mongodb://localhost:27017/realestate')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const properties = [
    {
        picture: "Pentkhaus_5.jpeg",
        title: "Luxury Apartment in Moscow",
        description: "Просторная квартира в центре Москвы с изысканным дизайном и роскошной обстановкой. Расположена в шаговой доступности от всех основных достопримечательностей и общественного транспорта.",
        price: 5000000,
        location: "Moscow"
    },
    {
        picture: "386246076.jpeg",
        title: "Cozy Cottage in the Countryside",
        description: "Уютный коттедж в живописном загородном месте, идеальный для уикенда на природе. Полностью оборудован для комфортного проживания и отдыха.",
        price: 1500000,
        location: "Tver"
    },
    {
        picture: "001-high-tech-apartment.jpeg",
        title: "Modern Loft in Saint Petersburg",
        description: "Современный лофт в культурной столице России, стильное жилье с просторными помещениями и современными удобствами. Идеально подходит для молодых специалистов и ценителей современного дизайна.",
        price: 3500000,
        location: "Saint Petersburg"
    },
    {
        picture: "26867302.jpeg",
        title: "Beach House on the Black Sea",
        description: "Впечатляющий дом на берегу Черного моря с потрясающим видом на море. Идеальное место для летнего отдыха и наслаждения красотами природы.",
        price: 6000000,
        location: "Sochi"
    },
    {
        picture: "1518139442662.jpeg",
        title: "Penthouse in the City Center",
        description: "Роскошный пентхаус в центре города с панорамным видом на городской пейзаж. Включает в себя частную крышу с террасой, идеальное место для роскошного проживания в сердце города.",
        price: 8000000,
        location: "Moscow"
    }
];

Property.insertMany(properties)
    .then(() => {
        console.log('Database seeded successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error seeding database', err);
        mongoose.connection.close();
    });
