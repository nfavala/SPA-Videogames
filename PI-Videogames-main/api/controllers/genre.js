const axios = require('axios');
const { Genre } = require("../src/db");
const { API_KEY } = process.env;


const getAllGenres = async (req, res) => {
    
    try{
        const urlGenre = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const nameGenre = urlGenre.data.results;

        nameGenre.forEach(async (g) => {
            await Genre.findOrCreate({
                where: {
                    name: g.name,
                }
            })
        });

        const allGenres = await Genre.findAll();

        res.status(200).json(allGenres);

    }catch(e){
        console.log(e)
    }
}

module.exports = {
    getAllGenres
}