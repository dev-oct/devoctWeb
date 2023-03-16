import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import '../styles/navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

    const navigate = useNavigate();
    const [showNavbar, setShowNav] = useState(false)

    const handleShowNavbar = () => {
        setShowNav(!showNavbar)
    }

    return (
        <div className="navbar shadow-xl bg-[#FC63001A]">
            <nav className="flex container p-5 justify-between items-center">
                <div className="navL items-center">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="menu-icon hover:cursor-pointer hidden m-5" onClick={handleShowNavbar}>
                    <RxHamburgerMenu className="text-lg" />
                </div>
                <div className={`navR flex items-center ${showNavbar && 'active'}`}>
                    <div className="navStart lg:mr-10 font-bold">
                        <button onClick={() => { navigate('/') }} className="active links hover:text-[#fc6300] lg:m-5">Home</button>
                        <button onClick={() => { navigate('/project') }} className="links hover:text-[#fc6300] lg:m-5">Projects</button>
                        <button onClick={() => { navigate('/blog') }} className="links hover:text-[#fc6300] lg:m-5">Blog</button>
                        <button onClick={() => { navigate('/roadmap') }} className="links hover:text-[#fc6300] lg:m-5">Roadmap</button>
                        <button onClick={() => { navigate('/contact') }} className="links hover:text-[#fc6300] lg:m-5">Contact Us</button>
                    </div>
                    <div className="navLast text-white bg-[#fc6300] px-8 py-1 rounded-md">
                        <button onClick={() => { navigate('/login') }} className="">Login</button>
                    </div>
                </div>
                {/* <div className={` ${showNavbar && 'active'}`}>

                </div> */}
            </nav >
        </div >
    );
}

export default Navbar;