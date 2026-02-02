const db = require("./db");
const config = require("../config");
async function getUsers() {
    const rows = await db.query(`SELECT * FROM users`);
    if (!rows) {
        return [];
    }
    return rows;
}
module.exports = { getUsers };

async function create(user) {
    const result = await db.query(
        `INSERT INTO users  (username, userpass)  VALUES  ('${user.username}', ${user.userpass})`,
    );
    let message = "Error creant usuari";
    if (result.affectedRows) {
        message = "Usuari creat amb èxit";
    }
    return { message };
}

module.exports = {
    getUsers,
    create,
};

async function update(id, user) {
    const result = await db.query(
        `UPDATE users  SET username='${user.username}', userpass='${user.userpass}'  WHERE id=${id}`,
    );
    let message = "Error actualitzant usuari";
    if (result.affectedRows) {
        message = "Usuari actualitzat amb èxit";
    }
    return { message };
}
module.exports = {
    getUsers,
    create,
    update,
};

async function remove(id) {
    const result = await db.query(`DELETE FROM users WHERE id=${id}`
    );
    let message = "Error eliminant usuari";
    if (result.affectedRows) {
        message = "Usuari eliminat amb èxit";
    }
    return { message };
}

module.exports = {
    getUsers,
    remove,
};

async function search(id){
    const result = await db.query(`SELECT * FROM users WHERE id=${id}`
    );
    let message = "Error buscant usuari";
    if(result.length > 0){
        message = `Usuari trobat: ${result[0].username}`;
    }
    return [message];
}
module.exports ={
    getUsers,
    search,
};