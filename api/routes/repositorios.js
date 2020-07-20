const express = require("express");
const router = express.Router();

const repositoriosController = require("../controllers/repositorios");

router.get("/repositorios/:linguagem/:pagina/:itensPorPagina", repositoriosController.getRepositorios);

module.exports = router;
