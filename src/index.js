import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-r4j14i0g6745ymo5.us.auth0.com"
    clientId="GdwkphET8O4C286j2J3vlJYgB7ucIK8v"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);



  
    
 


