const express = require("express");
const router = express.Router();
const apiRest = require("../services/apiRest");
/* --------------------    
    MIDDLEWARE AUTH 
-------------------- */
function auth(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({ message: "No autoritzat" });
    }
    next();
}

/* GET users. Ruta protegida amb auth*/
router.get("/user", auth, async function (req, res, next) {
    try {
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

/*Logout. Ruta protegida amb auth*/
router.post(
    "/logout",
    auth,
    async function (req, res, next) {
        try {
            res.json(await apiRest.logout(req, res));
        } catch (err) {
            console.error(`Error while logging out `, err.message);
            next(err);
        }
    },
);
module.exports = router;
