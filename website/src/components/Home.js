import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home">
            <Navbar />
            {/* <div className="flex-col justify-start">
                <button onClick={() => { navigate('/login') }} className="hb">Login</button>
                <button onClick={() => { navigate('/signup') }} className="hb">Sign Up</button>
            </div> */}
        </div >
    );
}

export default Home;