const getPlanets = async () => {
    let url = require("../config/config.json").starWarsUrl;
    try {
        const axios = require('axios');
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        //  throw new Error("error");
        return error;
    }
}

exports.index = async function (req, res, next) {

    let url = require("../config/config.json").starWarsUrl;
    const axios = require("axios");

    let response;
    let respons;
    const https = require("https");
    let data;
    data = await getPlanets();

    data.results.forEach(element=>console.log(element))

    return res.json(data.count);

};
