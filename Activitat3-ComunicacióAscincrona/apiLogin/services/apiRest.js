const db = require("./db");
const bcrypt = require("bcrypt");
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
    const users = await db.query(
        "SELECT * FROM users WHERE username = ?", 
        [username,]
    );
    if (!users || users.length === 0) {
        //Per si de cas torna un array buit [] (no troba res) verifiquem també .length ===0
        throwError("Usuario o password incorrecto", 401);
    }
    const user = users[0];
    const ok = await bcrypt.compare(userpass, user.userpass);
    //Compara, no desencripta
    if (!ok) {
        throwError("Usuari o password incorrecte", 401);
    }
    console.log("Creant sessió per a ID:", user.id);
    //Crear sessió (Express-session el guardarà a MySQL (taula sessions) automàticament quan acabi la petició)
    req.session.userId = user.id;
    req.session.username = user.username; //Aixó seria opcional    
    //Contestem al router
    return { message: "Login correcte", userId: user.id };
}
/* --------------------    
    LOGOUT 
-------------------- */
async function logout(req, res) {
    // req.session.destroy funciona amb callback, així que el fiquem a una Promesa   
    // per poder utilitzar "await" al router.
    return new Promise((resolve, reject) => {
        req.session.destroy((err) => {
            if (err) {
                console.error("Error tancant sessió:", err);
                return reject(new Error("Error tancant sessió"));
            } // Opcional: Netejar la cookie del costat del client explícitament
            res.clearCookie("connect.sid");
            resolve({ message: "Sessió tancada correctament" });
        });
    });
}
module.exports = { getUsers, login, logout };
