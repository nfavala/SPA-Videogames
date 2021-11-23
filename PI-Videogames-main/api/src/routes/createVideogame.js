const { Router } = require("express");
const router = Router();
const { Platform, Videogame, Genre } = require("../db");

router.post("/", async (req, res) => {
    let {name, description, releaseDate, rating, genres, platforms, created } 
    = req.body;

    let newGame = await Videogame.create({
        name,
        description,
        releaseDate,
        rating: rating || 1,
        created
    });

    let dbGenre = await Genre.findAll({
        where: { name: genres }
    });

    let dbPlatform = await Platform.findAll({
        where: { name: platforms }
    });

    newGame.addGenres(dbGenre);
    newGame.addPlatforms(dbPlatform);

    res.status(200).json(newGame);

});

module.exports = router;