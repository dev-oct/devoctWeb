import Login from './components/Login';
import Signup from './components/Signup';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route />
      </Routes>

      {/* <a href="#">Sign Up</a><br />
      <a href="#">Log In</a> */}
      {/* <Signup />
      <Login /> */}
    </div>
  );
}

export default App;
