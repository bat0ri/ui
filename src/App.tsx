import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import authInstance from './keycloak';



function App() {
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
