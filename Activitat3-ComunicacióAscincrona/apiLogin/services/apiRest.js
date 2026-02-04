const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Importem JWT const config = require('../config'); //Necessitem la clau secreta
/* --------------------    
    Helper per a errors 
-------------------- */
function throwError(message, status) {
    const error = new Error(message);
    error.statusCode = status;
    throw error;
}
async function getUsers() {
    const rows = await db.query(`SELECT * FROM users`);
    if (!rows || rows.length === 0) {
        return [];
    }
    return rows;
}
/* --------------------    
    LOGIN 
-------------------- */
async function login(req, res) {
    const { username, userpass } = req.body;
    if (!username || !userpass) {
        throwError("Faltan usuario o contraseña", 400);
    }
    const users = await db.query("SELECT * FROM users WHERE username = ?", [
        username,
    ]);
    if (!users || users.length === 0) {
        //Per si de cas torna un array buit [] (no troba res) verifiquem també .length ===0
        throwError("Usuario o password incorrecto", 401);
    }
    // Generar JWT   
    const token = jwt.sign(
        {
            userId: user.id,
            username: user.username
        },
        config.secretKey,
        {
            expiresIn: '2h'
        }
        // El token expira en 2 hores   
    );
    //Contestem al router   
    return {     
    message: "Login correcte", accessToken: token // Enviem el token al client   
    };
    //Contestem al router
    return { message: "Login correcte", userId: user.id };
}
/* --------------------    
LOGOUT – NO SERIA NECESSARI 
-------------------- */
async function logout(req, res) {
    // El Logout a JWT sol fer-se al client (esborrant el token). 
    // // Al servidor no hi ha res a destruir perquè no guardem sessió.  
    return { message: "Token invalidat (gestionar en el client)" };
}
module.exports = { getUsers, login, logout };
