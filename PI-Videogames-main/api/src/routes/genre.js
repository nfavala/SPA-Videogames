const { Router } = require("express");
const router = Router();
const { getAllGenres } = require("../../controllers/genre");

router.get("/", getAllGenres)

module.exports = router;