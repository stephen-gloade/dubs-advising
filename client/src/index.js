import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';
//
//  server root, wrapped by Auth0Provider for user context!
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dubs-advising.us.auth0.com"
    clientId="NGZWgYbQI66yAAdS83SYocKrzF5oyHeo"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/callback'
    }}
    scope="openid profile email"
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);