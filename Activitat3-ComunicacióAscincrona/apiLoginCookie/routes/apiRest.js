const express = require("express");
const router = express.Router();
const apiRest = require("../services/apiRest");
const jwt = require("jsonwebtoken");
const config = require("../config");

/* --------------------    
    MIDDLEWARE AUTH 
-------------------- */
function verifyToken(req, res, next) {
    // ✅ MODIFICADO: Ahora leemos el token desde la cookie en lugar del header
    const token = req.cookies.accessToken; // 🔹 El nombre 'accessToken' debe coincidir con el que usamos en login
    
    if (!token) {
        return res.status(401).json({ message: "Token no proporcionat (cookie)" });
    }
    
    jwt.verify(token, config.secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token no vàlid o expirat" });
        }
        req.user = user; // Guardamos los datos del usuario en la petición
        next();
    });
}

/* GET users. Ruta protegida */
router.get("/user", verifyToken, async function (req, res, next) {
    try {
        // Si llegamos aquí, es que el token era válido
        // Los datos del usuario están en req.user
        res.json(await apiRest.getUsers());
    } catch (err) {
        console.error(`Error while getting users `, err.message);
        next(err);
    }
});

/* Login */
router.post("/login", async function (req, res, next) {
    try {
        const result = await apiRest.login(req, res);
        
        // ✅ NUEVO: Establecer la cookie con el token
        res.cookie('accessToken', result.accessToken, {
            httpOnly: true,        // 🔹 No accesible desde JavaScript (más seguro)
            secure: false,         // 🔹 true si usas HTTPS (en producción debería ser true)
            sameSite: 'lax',       // 🔹 Protección CSRF
            maxAge: 2 * 60 * 60 * 1000 // 🔹 2 horas en milisegundos
        });
        
        // ✅ MODIFICADO: Devolvemos la respuesta sin el token (ya está en la cookie)
        res.json({ 
            message: result.message,
            username: result.username // Opcional: enviar info del usuario
        });
    } catch (err) {
        console.error(`Error while login `, err.message);
        next(err);
    }
});

/* ✅ NUEVO: Ruta para hacer logout */
router.post("/logout", function (req, res) {
    // Eliminamos la cookie
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });
    res.json({ message: "Sessió tancada correctament" });
});

/* ✅ NUEVO: Ruta para verificar si hay sesión activa */
router.get("/check-auth", verifyToken, function (req, res) {
    // Si el middleware verifyToken pasa, significa que hay sesión válida
    res.json({ 
        authenticated: true,
        user: req.user 
    });
});

module.exports = router;