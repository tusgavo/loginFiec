const express = require("express");
const Equipe = require("../models/equipes");
const BancoUtils = require("../helpers/bancoUtils");
const Usuario = require("../models/usuarios");
const con = require("../helpers/banco");
const routers = express.Router();

routers.get("/", (req, res) => {
  var tokenCookie = req.cookies["token"];
  if (tokenCookie == null) {
    res.redirect(301, "/login");
  } else {
    var idUsuario = req.cookies["id_usuario"];
    var equipe = BancoUtils.selectEquipes(
      Equipe.tabela,
      Usuario.chavePrimaria,
      idUsuario,
      (r) => {
        let equipeUsuario = JSON.parse(JSON.stringify(r));
        console.log("equipeUsuario");
        console.log(equipeUsuario.length);
        console.log(equipeUsuario.length === 0);
        if (equipeUsuario.length === 0) {
          console.log("redirecionando")
          res.redirect("/newTeam");
        } else {
          res.json(r);
        }
      }
    );
  }
});

routers.post("/", (req, res) => {
  const novaEquipe = new Equipe(req.body);
  BancoUtils.insert(novaEquipe, Equipe.tabela, (r) => {
    res.json(r);
  });
});

module.exports = routers;
