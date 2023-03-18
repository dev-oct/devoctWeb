//import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import TrendingP from "./TrendingP";
import RecentP from "./RecentP";

const Home = () => {

    //const navigate = useNavigate();

    return (
        <div className="home">
            <Navbar />
            <Landing />
            <About />
            <TrendingP />
            <RecentP />
            <Team />
            <Contact />
        </div >
    );
}

export default Home;