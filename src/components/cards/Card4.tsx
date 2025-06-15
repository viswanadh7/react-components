import CardImage from '../../assets/images/card-image.jpg';

const Card4 = () => {
    return (
        <div className="w-96 hover:scale-105 transition-transform duration-300 group p-5 bg-black">
            <figure className="overflow-hidden rounded-lg relative mb-1">
                <img
                    src={CardImage}
                    alt=""
                    className="object-cover object-center aspect-video bg-gray-400"
                />
                <span className="absolute top-2 left-2 px-3 py-1 bg-gray-950/20 backdrop-blur-sm text-xs rounded-full text-gray-50">
                    Nature
                </span>
            </figure>
            <p className="text-xs text-gray-50/50">
                Unveiling the Secrets Beyond the Tourist Trails
            </p>
            <p className="text-xl text-pretty mt-2 text-gray-50">
                Unveiling the Secrets Beyond the Tourist Trails
            </p>
            <p className="line-clamp-2 text-sm text-gray-50 opacity-50 mt-1 group-hover:opacity-90 transition-opacity duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                veniam omnis consequatur sint. Perferendis ducimus cupiditate
                deserunt architecto doloribus non.
            </p>
        </div>
    );
};

export default Card4;
