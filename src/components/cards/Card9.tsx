
const Card9 = () => {
    return (
        <div className="max-w-xs border border-blue-100 rounded-xl bg-white p-4">
            <div className="flex items-center gap-4">
                <span className="flex items-center justify-center flex-shrink-0 rounded-full bg-blue-400 p-2 text-white">
                    <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        />
                    </svg>
                </span>
                <p className="font-semibold text-gray-600">New message!</p>
            </div>
            <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum
                minima?
            </p>
            <div className="mt-6">
                <a
                    href="#"
                    className="block w-full rounded-md bg-blue-600 py-3 px-5 text-center text-sm font-semibold text-white"
                >
                    Take a Look
                </a>
                <a
                    href="#"
                    className="mt-2 block w-full rounded-md bg-gray-50 py-3 px-5 text-center text-sm font-semibold text-gray-600 hover:bg-gray-200 transition"
                >
                    Mark as Read
                </a>
            </div>
        </div>
    );
};

export default Card9;
