const axios = require('axios')
require("dotenv").config();
const { ODDS_APIKEY  } = process.env;

// An api key is emailed to you when you sign up to a plan
// Get a free API key at https://api.the-odds-api.com/
const apiKey = ODDS_APIKEY

const sportKey = 'baseball_mlb' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited

const oddsFormat = 'decimal' // decimal | american

const dateFormat = 'iso' // iso | unix

/*
    First get a list of in-season sports
        the sport 'key' from the response can be used to get odds in the next request

*/
const allSportsHandler = (req, res) => {
axios.get('https://api.the-odds-api.com/v4/sports', {
    params: {
        apiKey
    }
}) .then(response => {
    res.json(response.data)
    
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])
})
.catch(error => {
    console.log('Error status', error.response)
    console.log(error.response.data)
})
}

module.exports = { allSportsHandler }
