# :diamonds:Dubs Advising Capstone Project:diamonds:

This repository contains the source code for a web-based arbitrage betting platform that specializes in math based betting. This project was built to provide Dubs clients a prototype betting system for implementation into the production site. 

## :trophy:Project Overview

The platform allows authorized users to view all games being played from an array of 60 different sports through the ODDS API. These individual games are then mapped through to find the best odds from each bookmaker. The best odds per team are then displayed and the user is informed whether or not the math allows for a 0% loss bet. Calculations are done using Express.js endpoints made for this project and some client side arithimic. The user is authorizied using auth0, without proper authorization the user cannot access the arbitrage systems.

The frontend of the application is built with React, providing a smooth and responsive user interface. The backend is built with Node.js, creating a RESTful API that interfaces with the frontend, the ODDS API, and a database.

The backend provides the frontend with all the required data in an organized and efficient manner. As users make purchases, the database is updated to reflect the current stock of items.

## :dart:MVP

Frontend:
- Incorporated many different animation components.
- A search bar that filters through a list of 60 sports.
- Custom protected route hook so only users logged into auth0 can access certain pages.
- Users can view whether any games have arbitrage opportunities.
- Draw mechanics implemented to allow for working calculations on games with a draw outcome possibility.
- Sendgrid incorporation for people to contact us directly from the website to our email.

Backend:
- The Node server provides a RESTful API.
- The server provides the frontend with required data in a clear and organized way after being received from a third party api.
- Auth0 integration to send the user information to MongoDB 

## :pencil:Future Improvements

Here are some areas to improve in future development:

- Server side rendering. Make more of the mapping and calculations be on the server side.
- Implement a cleaner UI for understanding the more profitable bets.
- Optimize database for more user information to be added.
- Make the frontend responsive

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
