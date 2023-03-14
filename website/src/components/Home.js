import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home bg-slate-900 text-white h-96">
            <h1 className="text-center">DevOct</h1>
            <div className="compLink flex text-center w-10% flex-col">
                <button onClick={() => { navigate('/login') }} className="hb hover:border-b-2 hover:border-b-amber-300">Login</button>
                <button onClick={() => { navigate('/signup') }} className="hb">Sign Up</button>
            </div>
        </div >
    );
}

export default Home;