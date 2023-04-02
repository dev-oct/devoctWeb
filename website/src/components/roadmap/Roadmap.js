import Navbar from "../Navbar";
import Footer from "../Footer";
import logo from '../../assets/roadmaps/vector.png';
import "../../styles/roadmap.css";
import { roadmap } from "../../roadmap";

const Roadmap = () => {
    return (
        <div>
            <Navbar />

            <div className="rm flex flex-col">
                <div className="flex m-2 roadmap flex-row justify-around items-center">
                    <div className="text-center roadmapC w-1/3 items-center">
                        <h2 className="text-2xl rHead font-bold bg-linear-gradient(184.78deg, #FAC7A6 16.51%, #FC6300 96.14%)">Developers Roadmaps</h2>
                        <p className="m-2">Unlock the power of coding and pave your way to success with these essential
                            steps to become a skilled Developer</p>
                    </div>
                    <div className="">
                        <img src={logo} alt="avtar" />
                    </div>
                </div>
                <div className="content">
                    <div className="flex uppercase text-center flex-wrap flex-row justify-around">
                        {roadmap.map(props => (
                            <div key={props._id} className="w-80 flex flex-col justify-center items-center sc">
                                <img src={props.image} alt="category" />
                                <span>{props.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            <Footer />
        </div >
    );
}

export default Roadmap;