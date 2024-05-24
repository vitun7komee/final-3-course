// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');
// //const session = require('express-session'); // new
// const app = express();

// // Подключение к MongoDB
// mongoose.connect('mongodb://localhost:27017/realestate', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// // Middleware
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'static')));
// app.use('/img', express.static(path.join(__dirname, 'img'))); // Добавьте эту строку

// // Маршруты
// const propertiesRouter = require('./routes/properties');
// app.use('/api/properties', propertiesRouter);

// // Запуск сервера
// const PORT = process.env.PORT || 3009;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// сверху работающая версия











// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const path = require('path');

// const app = express();

// // Подключение к MongoDB
// mongoose.connect('mongodb://localhost:27017/realestate', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// // Middleware
// app.use(bodyParser.json());
// app.use('/img', express.static(path.join(__dirname, 'img'))); // Добавьте эту строку
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'secretKey',
//     resave: false,
//     saveUninitialized: true
// }));
// app.use(express.static(path.join(__dirname, 'static')));

// // Маршруты
// const propertiesRouter = require('./routes/properties');
// const authRouter = require('./routes/auth');
// app.use('/api/properties', propertiesRouter);
// app.use('/auth', authRouter);


// // Маршруты для отображения страниц


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html')); //  there was 'index.html'
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

// app.get('/admin/dashboard', (req, res) => {
//     if (req.session.user && req.session.user.role === 'admin') {
//         res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// // app.get('/admin/dashboard', (req, res) => {
// //     // Проверка аутентификации администратора
// //     if (req.session.user && req.session.user.role === 'admin') {
// //         res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
// //     } else {
// //         // Если пользователь не аутентифицирован или не является администратором, перенаправляем на страницу входа
// //         res.redirect('/login');
// //     }
// // });

// // Запуск сервера
// const PORT = process.env.PORT || 3004;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const path = require('path');

// const app = express();

// // Подключение к MongoDB
// mongoose.connect('mongodb://localhost:27017/realestate', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// // Middleware
// app.use(bodyParser.json());
// app.use('/img', express.static(path.join(__dirname, 'img')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'secretKey',
//     resave: false,
//     saveUninitialized: true
// }));
// app.use(express.static(path.join(__dirname, 'static')));

// // Маршруты
// const propertiesRouter = require('./routes/properties');
// const authRouter = require('./routes/auth');
// app.use('/api/properties', propertiesRouter);
// app.use('/auth', authRouter);

// // Маршруты для отображения страниц
// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// // });
// app.get('/login', (req, res) => {
//     console.log("Requested login page");
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

// app.get('/admin/dashboard', (req, res) => {
//     console.log("Requested admin dashboard page");
//     if (req.session.user && req.session.user.role === 'admin') {
//         res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/', (req, res) => {
//     console.log("Requested index page");
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// // app.get('/login', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// // });

// // app.get('/admin/dashboard', (req, res) => {
// //     if (req.session.user && req.session.user.role === 'admin') {
// //         res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
// //     } else {
// //         res.redirect('/login');
// //     }
// // });

// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views', 'index.html'));// index tyt
// // });


// // Запуск сервера
// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/realestate', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Маршруты
const propertiesRouter = require('./routes/properties');
const authRouter = require('./routes/auth');
app.use('/api/properties', propertiesRouter);
app.use('/auth', authRouter);

// Маршруты для отображения страниц

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/admin/dashboard', (req, res) => {
    if (req.session.user && req.session.user.role === 'admin') {
        res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
    } else {
        res.redirect('/login');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

