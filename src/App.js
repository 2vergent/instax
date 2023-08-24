import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Feed from './Components/Feed/feed';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
