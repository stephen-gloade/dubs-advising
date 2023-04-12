const axios = require("axios")
require("dotenv").config();
const { ODDS_APIKEY  } = process.env;

const apiKey = ODDS_APIKEY

//const sportKey = 'baseball_mlb' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited

const oddsFormat = 'decimal' // decimal | american

const dateFormat = 'iso' // iso | unix

//
//  GET where the sportkey is passed, allowing for rendering of individual games in a certain sport
//

const individualSportHandler = (req, res) => {
    const sportKey = req.params.sportKey;
    console.log(sportKey)
    axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
    params: {
        apiKey,
        regions,
        markets,
        oddsFormat,
        dateFormat,
    }
})
.then(response => {
    res.json(response.data)

    // console.log('Remaining requests',response.headers['x-requests-remaining']) IN FOR FUTURE USE
    // console.log('Used requests',response.headers['x-requests-used'])           IN FOR FUTURE USE

})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})
}

module.exports = { individualSportHandler }