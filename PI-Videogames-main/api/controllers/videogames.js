// require("dotenv").config();
const { Videogame, Genre, Platform } = require("../src/db");
const axios = require("axios");
const { API_KEY } = process.env;

const getGames = async () => {
        let apiGames = [];

const url1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
const url2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
const url3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
const url4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
const url5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)

        apiGames = url1.data.results.concat(
            url2.data.results,
            url3.data.results,
            url4.data.results,
            url5.data.results,
        );

        apiGames = apiGames.map((game) => {
            const platforms = game.platforms.map((g) => g.platform);
            return {
              id: game.id,
              name: game.name,
              image: game.background_image,
              genres: game.genres,
              platforms: platforms,
        
              rating: game.rating,
              released: game.released,
            };
          });
          return apiGames;
        };
        
        const dataBase = async () => {
          return await Videogame.findAll({
            include: [Genre, Platform],
            // traigo el nombre del genero
          });
        };
        
        const getAllGames = async () => {
          const apiData = await getGames(); // devuelvo todo la pi
          const dbInfo = await dataBase();
          const total = apiData.concat(dbInfo);
          return total;
        };
            
module.exports = {
getGames,
dataBase,
getAllGames,
};

       
