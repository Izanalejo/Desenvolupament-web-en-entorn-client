const express = require("express");
const router = express.Router();
const apiRest = require("../services/apiRest");
/* GET users. */ router.get("/user", async function (req, res, next) {
    try {
        res.json(await apiRest.getUsers());
    } catch (err) {
        console.error(`Error while getting users `, err.message);
        next(err);
    }
});

/* POST user */
router.post("/user", async function (req, res, next) {
    try {
        res.json(await apiRest.create(req.body));
    } catch (err) {
        console.error(`Error  creant usuari`, err.message);
        next(err);
    }
});

/* PUT user */ router.put("/user/:id", async function (req, res, next) {
    try {
        res.json(await apiRest.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error actualitzant usuari`, err.message);
        next(err);
    }
});

/* DELETE user */ router.delete("/user/:id", async function (req, res, next) {
    try {
        res.json(await apiRest.remove(req.params.id));
    } catch (err) {
        console.error(`Error eliminant usuari`, err.message);
        next(err);
    }
});
/*SEARCH user */ router.post("/user/:id", async function (req, res, next) {
    try{
        res.json(await apiRest.search(req.params.id));
    }catch(err){
        next(err);
    }
});


module.exports = router;
