import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import authInstance from './keycloak';
import keycloak from './config/keycloak';


async function initKC() {
  try {
    const authenticated = await authInstance.init({ onLoad: 'check-sso' });
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
  } catch (error) {
      console.error('Failed to initialize adapter:', error);
  }
  
}

function App() {

  initKC();
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<Profile/>} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App
