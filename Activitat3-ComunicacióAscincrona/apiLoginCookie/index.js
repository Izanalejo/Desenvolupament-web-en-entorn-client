const express = require("express");
const app = express();
const port = 3000;
const apiRestRouter = require("./routes/apiRest");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // ✅ NUEVO: Para gestionar cookies

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MODIFICADO: CORS debe permitir credenciales (cookies)
app.use(cors({
    origin: 'http://localhost:5500', // 🔹 Cambia esto por la URL de tu frontend Angular
    credentials: true // 🔹 IMPORTANTE: Permite enviar/recibir cookies
}));

// ✅ NUEVO: Middleware para parsear cookies
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({ message: "API amb JWT activa amb Cookies" });
});

app.use("/", apiRestRouter);

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
        `API-REST amb Cookies corrent en http://localhost:${port}`,
    );
});