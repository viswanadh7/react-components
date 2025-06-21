import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-3 p-20 bg-gray-50 h-screen w-screen">
            <button
                onClick={() => navigate('cards')}
                className="bg-white col-span-1 w-52 h-12 items-center rounded shadow text-center cursor-pointer"
            >
                Cards
            </button>
            <button
                onClick={() => navigate('sign-in')}
                className="bg-white col-span-1 w-52 h-12 items-center rounded shadow text-center cursor-pointer"
            >
                Sign In
            </button>
        </div>
    );
};

export default Home;
