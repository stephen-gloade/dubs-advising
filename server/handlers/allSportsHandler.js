const axios = require('axios')
require("dotenv").config();
const { ODDS_APIKEY  } = process.env;

const apiKey = ODDS_APIKEY

const sportKey = 'baseball_mlb' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited

const oddsFormat = 'decimal' // decimal | american

const dateFormat = 'iso' // iso | unix

//
//  Fetches all of the different sports available from the data set
//

const allSportsHandler = (req, res) => {
axios.get('https://api.the-odds-api.com/v4/sports', {
    params: {
        apiKey
    }
}) .then(response => {
    res.json(response.data)
    
    // console.log('Remaining requests',response.headers['x-requests-remaining'])            LEFT IN FOR FUTURE USE
    // console.log('Used requests',response.headers['x-requests-used'])                      LEFT IN FOR FUTURE USE
})
.catch(error => {
    console.log('Error status', error.response)
    console.log(error.response.data)
})
}

module.exports = { allSportsHandler }
