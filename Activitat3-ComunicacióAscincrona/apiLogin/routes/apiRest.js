const express = require("express");
const router = express.Router();
const apiRest = require("../services/apiRest");
const jwt = require("jsonwebtoken");
const config = require("../config");
/* --------------------    
    MIDDLEWARE AUTH 
-------------------- */
function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    // El token sol venir com a "Bearer <TOKEN>"
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token no proporcionat" });
    }
    jwt.verify(token, config.secretKey, (err, user) => {
        if (err)
            return res.status(403).json({ message: "Token no vàlid o expirat" });
        req.user = user; // Guardem les dades de l'usuari a la petició
        next();
    });
}
/* GET users. Ruta protegida*/
router.get("/user", verifyToken, async function (req, res, next) {
    try {//Si arribem aquí, és que el token era vàlid
        //Les dades de l'usuari són a req.user

        res.json(await apiRest.getUsers());
    } catch (err) {
        console.error(`Error while getting users `, err.message);
        next(err);
    }
});
/* Login. */
router.post("/login", async function (req, res, next) {
    try {
        res.json(await apiRest.login(req, res));
        //Esperem a que contesti services
    } catch (err) {
        console.error(`Error while login `, err.message);
        next(err);
    }
});
module.exports =  router;
