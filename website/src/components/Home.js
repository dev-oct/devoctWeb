import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home bg-slate-900 text-white h-96">
            <h1 className="text-center">DevOct</h1>
            <div className="compLink flex flex-col">
                <button onClick={() => { navigate('/login') }} className>Login</button>
                <button onClick={() => { navigate('/signup') }}>Sign Up</button>
            </div>
        </div>
    );
}

export default Home;