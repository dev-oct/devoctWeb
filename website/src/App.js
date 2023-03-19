import Login from './components/Login';
import Signup from './components/Signup';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Project from './components/project/Project';
import Roadmap from './components/roadmap/Roadmap';
import Contactus from './components/contactus/Contactus';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

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
