import '../styles/signup.css'
import logo from '../assets/logo.png'
import vector from '../assets/Vector.png'
import { AiFillEye } from 'react-icons/ai';

const Signup = () => {
    return (
        <main className="signup flex flex-row justify-between">
            <div className="left flex flex-col py-2 px-16">
                <div className="head px-11">
                    <img src={logo} alt="logo" className="logo h-36 w-36" />
                </div>
                <div className="body flex-col pt-8 mx-auto w-46">
                    <h1 className="font-bold text-3xl">Create Account</h1>
                    <div className="sform flex flex-col p-2">
                        <input type="text" name="fname" className="fname bg-[#F1F1F1] px-4 py-1 placeholder:font-medium placeholder:text-gray-600 rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Full Name" />
                        <input type="text" name="mail" className="mail bg-[#F1F1F1] px-4 py-1 placeholder:font-medium placeholder:text-gray-600  rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Email Address" />
                        <div className='flex flex-row password'>
                            <input type="text" name="pass" className="pass bg-[#F1F1F1] px-4 py-1  placeholder:font-medium placeholder:text-gray-600 rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Password" />
                            <button className='passbtn'><AiFillEye className="btn-inside" /></button>
                        </div>
                        <div className='flex flex-row password'>
                            <input type="password" name="cpass" className="cpass bg-[#F1F1F1] px-4 py-1 m-2  placeholder:font-medium placeholder:text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Confirm Password" />
                            <button className='passbtn'><AiFillEye className='btn-inside' /></button>
                        </div>
                        <div className="flex flex-row text-center m-2">
                            <input type="checkbox" className=" w-3 m-1" />
                            <p className="text-sm m-1">I have read and accepted the<span className="font-bold text-[#F96302]">Terms and Condition </span>to Devoct</p>
                        </div>
                        <button className="cbtn my-6 bg-[#F96302] text-white font-bold py-1 px-1 rounded-md">Create Account</button>
                        <p className='etext'><span>Or sign up with</span></p>
                    </div>
                </div>
            </div>
            <div className="right flex text-center flex-auto flex-col  bg-[#FDC8A6] w-auto">
                <div className="content flex flex-col">
                    <h2 className="bold">Welcome to Devoct</h2>
                    <p className="w-42">Developing the best and efficient website, web applications and software application </p>
                </div>
                <img className="h-40 w-40" src={vector} alt="sign_emoj" />
            </div>
        </main>
    );
}

export default Signup;