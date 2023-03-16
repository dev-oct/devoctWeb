import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home">
            <Navbar />
            <Landing />
            <About />
            {/* <div className="flex-col justify-start">
                <button onClick={() => { navigate('/login') }} className="hb">Login</button>
                <button onClick={() => { navigate('/signup') }} className="hb">Sign Up</button>
            </div> */}
        </div >
    );
}

export default Home;