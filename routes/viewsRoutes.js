const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("cadastro");
});

router.get("/contRegister", (req, res) => {
    res.render("cadastro2");
});

router.get("/equipe", (req, res) => {
    res.render("equipe");
});

router.get("/atletas", (req, res) => {
    res.render("atleta");
});

module.exports = router;