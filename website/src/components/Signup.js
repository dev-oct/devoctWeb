import '../styles/signup.css'
import logo from '../assets/logo.png'
import vector from '../assets/Vector1.png'
import { AiFillEye } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    return (
        <main className="signup flex flex-row">
            <div className="left flex flex-col lg:px-16">
                <div className="head flex sm:px-1 lg:px-11">
                    <img src={logo} alt="logo" className="logo h-36 w-36 text-center" />
                </div>
                <div className="body flex-col mt-5 mx-auto w-46">
                    <h1 className="font-bold text-4xl">Create Account</h1>
                    <div className="sform flex mt-2 flex-col p-2">
                        <input type="text" name="fname" className="fname bg-[#F1F1F1] px-4 py-1 w-96 placeholder:font-medium placeholder:text-gray-600 rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Full Name" />
                        <input type="text" name="mail" className="mail bg-[#F1F1F1] px-4 py-1 w-96 placeholder:font-medium placeholder:text-gray-600  rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Email Address" />
                        <div className='flex flex-row password'>
                            <input type="text" name="pass" className="pass bg-[#F1F1F1] px-4 py-1 w-96 placeholder:font-medium placeholder:text-gray-600 rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Password" />
                            <button className='passbtn'><AiFillEye className="btn-inside" /></button>
                        </div>
                        <div className='flex flex-row password'>
                            <input type="password" name="cpass" className="cpass bg-[#F1F1F1] px-4 py-1 m-2 w-96 placeholder:font-medium placeholder:text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Confirm Password" />
                            <button className='passbtn'><AiFillEye className='btn-inside' /></button>
                        </div>
                        <div className="flex flex-row w-96 items-center text-center m-2">
                            <input type="checkbox" className="mb-4" />
                            <p className="text-sm m-1">I have read and accepted the<span className="font-bold text-[#F96302]">Terms and Condition </span>to Devoct</p>
                        </div>
                        <button className="cbtn my-4 ml-2 bg-[#F96302] text-white font-bold py-1 px-1 w-96 rounded-md">Create Account</button>
                    </div>
                    <p className='etext'><span>Or sign up with</span></p>
                    <div className='externalLinks text-center text-4xl text-blue-900'>
                        <button className='m-5'><FaFacebookF /></button>
                        <button className='m-5' ><FcGoogle /></button>
                        <button className='m-5'><BsLinkedin /></button>
                    </div>
                    <p className='llogin text-center'>Already have an account? <button className='ml-2 text-[#F96302] font-bold underline' onClick={() => { navigate('/login') }}>Sign In</button></p>
                </div>
            </div>

            <div className="right bg-[#FDC8A6]">
                <div className="text-center px-16 py-20 items-center">
                    <div className="content flex-col justify-center">
                        <h2 className="font-bold text-4xl">Welcome to Devoct</h2>
                        <p className="w-34 text-lg font-medium my-2 mx-40">Developing the best and efficient website, web applications and software application </p>
                        <img className="h-96 w-96 avatar" src={vector} alt="sign_emoj" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signup;