const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Importem JWT const config = require('../config'); //Necessitem la clau secreta
const config = require('../config'); 
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
        throwError("Usuario o password incorrecto", 401);
    }
    
    // ✅ Extraer el primer usuario
    const user = users[0];
    
    // ✅ Verificar la contraseña con bcrypt
    const passwordMatch = await bcrypt.compare(userpass, user.userpass);
    
    if (!passwordMatch) {
        throwError("Usuario o password incorrecto", 401);
    }
    
    // ✅ Generar JWT   
    const token = jwt.sign(
        {
            userId: user.id,
            username: user.username
        },
        config.secretKey,
        {
            expiresIn: '2h'
        }
    );
    
    // ✅ Contestar al router (solo un return)
    return {     
        message: "Login correcte", 
        accessToken: token
    };
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
