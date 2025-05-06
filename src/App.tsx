import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import React from 'react';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  
  return (
    <ReactKeycloakProvider 
      authClient={keycloak}
      initOptions={{ 
        onLoad: 'check-sso',
        checkLoginIframe: false,
      }}
    >
      <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
    </ReactKeycloakProvider>  
);
}

export default App;
