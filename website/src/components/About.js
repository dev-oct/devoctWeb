import '../styles/about.css';
import about from '../assets/aboutL.png'

const About = () => {
    return (
        <div className="about flex-col text-center">
            <div className="aboutT items-center">
                <h1 className='font-bold text-4xl'>About Us</h1>
            </div>
            <div className="aboutD flex items-center justify-around">
                <div className="">
                    <img src={about} alt="aboutUs" className='abtPic' />
                </div>
                <div className='w-1/2 font-medium abtT text-left'>
                    <p>A helpful resource for developers of all skill levels! Our website is dedicated to providing you with valuable information and
                        resources to help you grow and succeed in your development career.Whether you're a beginner just starting out or
                        an experienced developer looking to stay up-to-date with the latest trends and technologies, we have something for you. </p>
                </div>
            </div>
        </div>
    );
}

export default About;