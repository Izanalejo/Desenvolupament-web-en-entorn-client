const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const cookieParser = require('cookie-parser');

router.use(cookieParser()); // Necesario para leer cookies

// Simulación de base de datos para Refresh Tokens (en producción iría a MySQL/Redis)
let refreshTokens = [];

// LOGIN
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // ... (Validación de usuario en BD omitida para brevedad) ...
    const user = { name: username, role: 'admin' }; 

    // 1. Generar Access Token (Vida corta)
    const accessToken = jwt.sign(user, config.secretKey, { expiresIn: config.accessTokenLife });
    
    // 2. Generar Refresh Token (Vida larga)
    const refreshToken = jwt.sign(user, config.refreshSecretKey, { expiresIn: config.refreshTokenLife });
    
    // Guardamos el refresh token (en una BD real)
    refreshTokens.push(refreshToken);

    // 3. Enviar Refresh Token en una Cookie HttpOnly
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true, // Invisible para JavaScript (Protección XSS)
        secure: false,  // Poner a true en producción (HTTPS)
        sameSite: 'strict', // Protección CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
    });

    // Enviamos el Access Token en el JSON (el cliente lo guarda en memoria)
    res.json({ accessToken, user });
});

// REFRESH TOKEN: Genera un nuevo Access Token usando la Cookie
router.post('/token', (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, config.refreshSecretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        
        // Creamos un nuevo Access Token
        const accessToken = jwt.sign({ name: user.name, role: user.role }, config.secretKey, { expiresIn: config.accessTokenLife });
        res.json({ accessToken });
    });
});

// LOGOUT: Limpia la cookie y borra el token de la lista
router.post('/logout', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    res.clearCookie('refreshToken');
    res.sendStatus(204);
});

module.exports = router;