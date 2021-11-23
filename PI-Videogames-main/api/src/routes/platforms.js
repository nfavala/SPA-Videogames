const { Platform } = require ("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getPlatform = async (req, res) => {
    res.send("soy la ruta de platform")
}

module.exports = getPlatform;