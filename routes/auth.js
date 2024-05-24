const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Простая проверка, это можно заменить на реальную проверку в базе данных
    if (username === 'admin' && password === 'adminpassword') {
        req.session.user = { role: 'admin' };
        res.redirect('/admin/dashboard');
    } else {
        req.session.user = { role: 'user' };
        res.redirect('/');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;
