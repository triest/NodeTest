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
    const db = req.app.get("db");
    db.sync();
    let response;
    let respons;
    const https = require("https");
    let data;
    data = await getPlanets();

    data.results.forEach(async function (item) {
        await db.models.planet.create({
            name:item.name,
            rotation_period:item.rotation_period,
            orbital_period:item.orbital_period,
            diameter:item.diameter,
            climate:item.climate,
            gravity:item.gravity,
            terrain:item.terrain,
            surface_water:item.surface_water,
            created:item.created,
            edited:item.edited,
            url:item.url,
            population:item.population,
        })
    })

    return res.json(data.count);

};
