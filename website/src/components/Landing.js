import landingImg from '../assets/landingPic.png';
import '../styles/landing.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Landing = () => {
    return (
        <div className="landing p-5 m-2">
            <div className="landing-content py-3 flex justify-around">
                <div className="landing-text m-5 p-5 w-64 flex-col">
                    <h1 className="text-4xl title font-bold">Welcome to <span className="text-[#fc6300]">DEVOCT!</span></h1>
                    <p className="text-l para font-semibold mt-5">We are experts at project development and implementation services for businesses of all sizes.</p>
                    <div className='flex-row flex my-5 hover:opacity-70'>
                        <button className="intrBtn underline decoration-[#263238] underline-offset-2">Get Started</button>
                        <span className='m-1 pt-1'><BsFillArrowRightCircleFill className='p-0 m-0 text-[#2632385E] rounded-lg text-xl' /></span>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={landingImg} alt="landingpic" className="lPic" />
                </div>
            </div>
        </div>
    );
}

export default Landing;