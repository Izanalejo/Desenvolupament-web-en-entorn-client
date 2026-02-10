const bcrypt = require("bcrypt"); // Llegim la contrasenya del paràmetre ( node hash.js 1234 )
const password = process.argv[2];
if (!password) {
    console.log("Has d'indicar una contrasenya");
    console.log("Exemple: node hash.js 1234");
    process.exit(1);
}
const saltRounds = 10;
bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
        console.log("Contrasenya original:", password);
        console.log("Hash per guardar a la BD:");
        console.log(hash);
    })
    .catch((err) => {
        console.error("Error generant el hash", err);
    });
