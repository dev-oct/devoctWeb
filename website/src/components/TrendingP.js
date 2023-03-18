import "react-alice-carousel/lib/alice-carousel.css";
import { projects } from '../projects';
//import AliceCarousel from 'react-alice-carousel';
import '../styles/trendingp.css';

const TrendingP = () => {
    return (
        <div className="flex projects flex-col">
            <div className="items-center aboutT text-center">
                <h1 className="font-bold text-3xl">Trending Project</h1>
            </div>
            <div className="p-5 my-3 project flex gap-5 flex-row justify-around">
                {projects.map(props => (
                    <div key={props._id} className=" bg-[#CCE4E791] h-86 w-72 rounded-md hover:transform hover:scale-105">
                        <div className="">
                            <img src={props.image} className="h-40 w-72" alt={props.title} />
                        </div>
                        <div className="text-[#1E1E1E] p-3">
                            <p className="font-semibold text-lg h-16 w-44">{props.title}</p>
                            <p className="text-sm">{props.content}</p>
                            <div className="text-center m-1">
                                <button className="bg-[#FC6300E5] text-white rounded-md px-10 py-1 w-30">Open Set</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}
export default TrendingP;