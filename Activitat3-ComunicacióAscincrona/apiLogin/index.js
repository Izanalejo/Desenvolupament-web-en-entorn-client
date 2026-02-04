const express = require("express");
const app = express();
const port = 3000;
const apiRestRouter = require("./routes/apiRest");
const config = require("./config");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* --------------------    
CONFIGURACIÓ SESSIONS 
-------------------- */
const sessionStore = new MySQLStore(config.db); //db -> dades BBDD
app.use(
    session({
        secret: "proven-secret",
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
    }),
);
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.use("/", apiRestRouter); // enllaçem les rutes   amb l'encaminador que acabem de crear

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
/* --------------------    
        SERVIDOR 
-------------------- */
app.listen(port, () => {
    console.log(
        `Aquesta és la nostra API-REST que corre en http://localhost:${port}`,
    );
});
