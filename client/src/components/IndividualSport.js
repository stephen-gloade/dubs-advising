import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment-timezone";
import { NBATeamLogos } from "./teamlogos/NBATeamLogos";
import { MLBTeamLogos } from "./teamlogos/MLBTeamLogos";
import { NFLTeamLogos } from "./teamlogos/NFLTeamLogos";
import useProtectedRoute from "./useProtectedRoute";

const IndividualSport = () => {

    const protectedRoute = useProtectedRoute();
    const [ specificSport, setSpecificSport ] = useState([])
    const [drawExist, setDrawExist] = useState(false);
    const { sportKey } = useParams()
    

    //
    // FETCH to display data specific to the sportKey ex: 'baseball_mlb'
    //
    useEffect(() => {
        fetch(`/sports/${sportKey}/odds`)
        .then(res => res.json())
        .then((data) => {
            setSpecificSport(data)
        })

    }, [sportKey])

    //
    // FUNCTION to find the best odds or 'price:' looking at every bookmaker!
    //

    const findBestPrices = (game) => {

        const bestPrices = {};
    
        game.bookmakers.forEach((bookmaker) => {
        bookmaker.markets.forEach((market) => {
        if (market.key === "h2h") {
            market.outcomes.forEach((outcome) => {
            if (
                !bestPrices[outcome.name] ||
                outcome.price > bestPrices[outcome.name]?.price
            ) {
                bestPrices[outcome.name] = {
                price: outcome.price,
                bookmaker: bookmaker.title,
                };
            }
            });
        }
        });
    });

    return bestPrices;
    };

      //
      // FUNCTION for conversion of decimal odds to American.
      //

    const decimalToAmericanOdds = (decimalOdds) => {
        if (decimalOdds >= 2) {
          return `+${Math.round((decimalOdds - 1) * 100)}`;
        } else {
          return `-${Math.round((1 / (decimalOdds - 1)) * 100)}`;
        }
    };


    //
    // FUNCTION convert the fetched GMT to EST
    //
    const convertToEST = (time) => {
        return moment(time).tz("America/New_York").format("MMM D, h:mm A");
    };

    //
    // FUNCTION to process whether or not it is Arbitrage
    // Also the cause of the most disgusting ternary operator in history
    // Likely could have been polished just a tad haha, ran out of time
    //

    const processArbitrage = (homeOdds, awayOdds, drawOdds) => {
        if (drawExist) {
            return (
                Math.round(((1 / homeOdds + 1 / awayOdds + 1 / drawOdds) * 100) * 100) / 100
            )
        } else {
            return (
                Math.round(((1 / homeOdds + 1 / awayOdds) * 100) * 100) / 100
            )
        }
    }
    

    //
    // FUNCTION to process which sport to use for Logo
    //

    const getTeamLogo = (sportKey, teamName) => {
        switch (sportKey) {
            case 'basketball_nba':
                return NBATeamLogos[teamName];
            case 'baseball_mlb':
                return MLBTeamLogos[teamName];
            case 'americanfootball_nfl':
                return NFLTeamLogos[teamName];
            default:
                return null;
        }
    };

    //
    //  Checking if a "Draw" outcome exists for the sport. Used for soccer
    //

    useEffect(() => {
        const drawExists = specificSport.some((game) =>
            game.bookmakers.some((bookmaker) =>
            bookmaker.markets.some((market) =>
            market.outcomes.some((outcome) => outcome.name === "Draw")
            )
        )
        );

        setDrawExist(drawExists);
    }, [specificSport]);



    //
    // Custom hook to ensure user authentication before accessing arbitrage pages
    //

    if (protectedRoute) {
        return protectedRoute;
    }

    return (
    <SportWrap>
        <GameWrap>
            <GridLegend>
                <p>Team</p>
                <p>Decimal Odds</p>
                <p>American Odds</p>
                <p>Sportsbook</p>
            </GridLegend>
        </GameWrap>
        {specificSport.map((game) => {
            const bestPrices = findBestPrices(game);
            const formattedTimeEST = convertToEST(game.commence_time);
            return (
                <GameWrap key={game.id}>
                    <TeamWrap>
                        <HomeTeamWrap>
                            
                            <TeamLogoWrap><H2>{getTeamLogo(sportKey, game.home_team)}</H2><H2>{game.home_team}</H2></TeamLogoWrap>
                                <Odds>{bestPrices[game.home_team].price}</Odds><Odds>{decimalToAmericanOdds(bestPrices[game.home_team].price)}</Odds><Odds>{bestPrices[game.home_team].bookmaker}</Odds>
                        </HomeTeamWrap>
                        <AwayTeamWrap>
                            <TeamLogoWrap><H2>{getTeamLogo(sportKey, game.away_team)}</H2><H2>{game.away_team}</H2></TeamLogoWrap>
                                <Odds>{bestPrices[game.away_team].price}</Odds><Odds>{decimalToAmericanOdds(bestPrices[game.away_team].price)}</Odds><Odds>{bestPrices[game.away_team].bookmaker}</Odds>
                        </AwayTeamWrap>
                    </TeamWrap>
                    
                    {drawExist ? 
                    <DrawWrap>
                    <p>Draw</p> 
                    <Odds>{bestPrices['Draw'].price}</Odds>
                    <Odds>{bestPrices["Draw"].bookmaker}</Odds>
                    </DrawWrap>
                    : null}
                    
                    <TimeWrap>
                        <H3>{formattedTimeEST} EST</H3>

                        {/* Quite possibly the most disgustttinggggg ternary operator in history. I'm kind of proud of it
                        in a masochistic way */}

                        {processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ? 
                        bestPrices['Draw'].price : undefined) < 80 ? 
                        <GreatArb>Great - %{processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ?
                        bestPrices['Draw'].price : undefined)}</GreatArb> : processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ?
                        bestPrices['Draw'].price : undefined) < 90 ? <GoodArb>Good - %{processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ?
                        bestPrices['Draw'].price : undefined)}</GoodArb> : processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ? bestPrices['Draw'].price : undefined) < 100 ?
                        <Arb>Okay - %{processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ? bestPrices['Draw'].price : undefined)}</Arb> : <H3>%{processArbitrage(bestPrices[game.home_team].price, bestPrices[game.away_team].price, drawExist ?
                        bestPrices['Draw'].price : undefined)}</H3>}
                    </TimeWrap>
                </GameWrap>
            )
        })}
    </SportWrap>
    )
}

const DrawWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TeamLogoWrap = styled.div `
display: flex;
align-items: center;
`

const GreatArb = styled.h4 `
width: 100%;
font-size: 1rem;
text-align: center;
background-color: #21F292;
padding: 5px;
border-radius: 5px;
color: black;

`
const GoodArb = styled.h4 `
width: 100%;
font-size: 1rem;
text-align: center;
background-color: #A5C9FF;
padding: 5px;
border-radius: 5px;
color: black;
`
const Arb = styled.h4 `
width: 100%;
font-size: 1rem;
text-align: center;
background-color: #FFB2B2;
padding: 5px;
border-radius: 5px;
color: black;

`

const GridLegend = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
width: 80%;

p {
    font-weight: 500; 
    text-align: center;

}
`

const Odds = styled.div `
display: flex;
justify-content:center;
align-items: center;
`

const TimeWrap = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const H3 = styled.h3 `
font-weight: 100;
padding: 5px;
color: #fff;
`

const TeamWrap = styled.div `
display: grid;
grid-template-rows: 1fr 1fr;
flex-direction: column;
width: 80%;
`

const HomeTeamWrap = styled.div `
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
padding: 5px;
border-bottom: 1px solid white;
grid-row-start: 1;
grid-row-end: 1;
`

const AwayTeamWrap = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
padding: 5px;
grid-row-start: 2;
grid-row-end: 2;
`
const H2 = styled.h2 `
color: #fff;
font-weight: 100;
`

const SportWrap = styled.div `
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`

const GameWrap = styled.div `
display: flex;
padding: 20px;
width: 80%;
background-color: #29282B;
margin: 10px;
border-radius: 5px;
color: #fff;
font-weight: 100;
justify-content: space-between;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export default IndividualSport;