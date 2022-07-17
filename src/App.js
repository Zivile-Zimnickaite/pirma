import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LogInPage from './pages/LogInPage';
import Toolbar from './components/Toolbar';
import ProfilePage from './pages/ProfilePage';
import AllUsersPage from './pages/AllUsersPage';
import UserProfilePage from './pages/UserProfilePage';



function App() {

  return (

    <BrowserRouter>

      <div className='mainContainer'>
        <Toolbar></Toolbar>
      </div>

      <Routes>
        <Route path="/" element={<RegistrationPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/users" element={<AllUsersPage />}></Route>
        <Route path="/user/:username" element={<UserProfilePage />}></Route>
      </Routes>


    </BrowserRouter >

  );
}

export default App;