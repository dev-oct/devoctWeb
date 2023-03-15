import logo from '../assets/logo.png'
import '../styles/login.css'
import vector from '../assets/Vector2.png'
import { AiFillEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="login">
            <main className="signup flex flex-row">
                <div className="left flex flex-col lg:px-16">
                    <div className="head flex sm:px-1 lg:px-11">
                        <img src={logo} alt="logo" className="logo h-36 w-36 text-center" />
                    </div>
                    <div className="body flex-col mt-20 mx-auto w-46">
                        <h1 className="font-bold text-4xl">Log In</h1>
                        <div className="sform flex mt-2 flex-col p-2">
                            <input type="text" name="mail" className="mail bg-[#F1F1F1] px-4 py-2 w-96 placeholder:font-medium placeholder:text-gray-600  rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Email" />
                            <div className='flex flex-row password'>
                                <input type="text" name="pass" className="pass bg-[#F1F1F1] px-4 py-2 w-96 placeholder:font-medium placeholder:text-gray-600 rounded-md m-2 focus:outline-none focus:ring focus:ring-[#56A6B1]" placeholder="Password" />
                                <button className='passbtn'><AiFillEye className="btn-inside" /></button>
                            </div>
                            <div className="flex flex-row w-96 justify-between items-center text-center m-2">
                                <div className='flex flex-row'>
                                    <input type="checkbox" />
                                    <p className="text-sm m-1">Remember Me</p>
                                </div>
                                <div><a className='fpass font-bold' href="#">Forgot Password?</a></div>
                            </div>
                            <button className="cbtn my-4 ml-2 bg-[#56A6B1] text-white font-bold py-1 px-1 w-96 rounded-md">Login</button>
                        </div>
                        <p className='llogin text-center'>Don't have an account? <button className='ml-2 text-[#56A6B1] font-bold underline' onClick={() => { navigate('/signup') }}>Create Account</button></p>
                    </div>
                </div>

                <div className="right bg-[#B8D8E0]">
                    <div className="text-center px-16 py-20 items-center">
                        <div className="content flex-col justify-center">
                            <h2 className="font-bold text-4xl">Welcome Back to Devoct</h2>
                            <p className="w-34 text-lg font-medium my-2 mx-40">Developing the best and efficient website, web applications and software application </p>
                            <img className="h-96 w-96 avatar" src={vector} alt="sign_emoj" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;