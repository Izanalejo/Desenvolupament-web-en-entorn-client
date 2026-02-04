const express = require("express");
const app = express();
const port = 3000;
const apiRestRouter = require("./routes/apiRest");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
    res.json({ message: "API amb JWT activa" });
});
app.use("/", apiRestRouter); // enllaçem les rutes amb l'encaminador que acabem de crear

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
