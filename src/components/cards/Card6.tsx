const Card6 = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs font-serif">
            <div className="relative">
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto text-indigo-600"
                >
                    <path d="M12 0l3.094 9.488h9.956L15.49 15.338 18.585 24 12 18.512 5.415 24l3.094-8.662L0 9.488h9.956z" />
                </svg>
            </div>
            <div className="mt-4 text-center">
                <div className="text-2xl font-semibold text-gray-900 font-mono">
                    Unique Card Title
                </div>
                <div className="mt-2 text-gray-600">
                    This is a unique card design featuring an abstract SVG
                    pattern. It's modern, minimalist, and stands out from the
                    usual card designs.
                </div>
                <button className="mt-6 px-4 py-2 bg-indigo-600 text-white text-sm w-full rounded shadow-md hover:bg-indigo-700 transition ease-out duration-300 hover:scale-95">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Card6;
