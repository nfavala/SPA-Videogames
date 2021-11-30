const axios = require("axios");
const { Platform } = require("../src/db");
const { API_KEY } = process.env;

const getPlatforms = async (req, res) => {
    try {
        const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const platforms = platformsApi.data.results;
        platforms.forEach(async (p) => {
            await Platform.findOrCreate({
                where: {
                    name: p.name,
                }
            })
        });

        const platformsDb = await Platform.findAll();

        res.status(200).json(platformsDb);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getPlatforms
}