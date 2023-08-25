import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/login';
import Feed from './Components/Feed/feed';
import Signup from './Components/Signup/signup';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Navigate to="/login"/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
