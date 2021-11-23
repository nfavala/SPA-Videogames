const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const videogames = require("./videogames")
const videogamesById = require("./videogameById")
const create = require("./createVideogame")
const genre = require("./genre")

router.use("/videogames", videogames);
router.use("/videogames", videogamesById);
router.use("/videogames", create)
router.use("/genre", genre)

module.exports = router;
