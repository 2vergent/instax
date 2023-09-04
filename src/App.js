import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/login';
import Feed from './Components/Feed/feed';
import Signup from './Components/Signup/signup';
import Profile from './Components/Profile/profile';
import { PrivateRoutes, PublicRoutes } from './Utils/protectRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicRoutes/>}>
          <Route exact path="/" element={<Navigate to="/login"/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
