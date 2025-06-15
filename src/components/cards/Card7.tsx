import MovieImage from '../../assets/images/movie-image.webp';
const Card = () => {
    return (
        <div className="card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
            <img
                src={MovieImage}
                className="absolute top-0 left-0 h-full w-full bg-[#fff8dc]"
            />
            <div className="container text-black z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                <div className="h-fit w-full">
                    <h1
                        style={{
                            fontWeight: 900,
                            WebkitTextFillColor: 'transparent',
                            WebkitTextStrokeWidth: 1,
                        }}
                        className="card_heading text-[1.5em] tracking-[.2em]"
                    >
                        STEEL BALL RUN
                    </h1>
                    <p
                        style={{
                            fontWeight: 900,
                            WebkitTextFillColor: 'transparent',
                            WebkitTextStrokeWidth: 1,
                            textShadow: '0 0 7px #fff',
                        }}
                        className="text-[1.2em]"
                    >
                        By Hirohiko Araki
                    </p>
                </div>
                <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
                    <div className="w-fit h-fit flex justify-left gap-[0.5em]">
                        <svg
                            fill="#222222"
                            className="h-[1em] w-[1em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
                        </svg>
                        <svg
                            fill="#222222"
                            className="h-[1em] w-[1em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
                        </svg>
                        <svg
                            fill="#222222"
                            className="h-[1em] w-[1em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
                        </svg>
                        <svg
                            fill="#222222"
                            className="h-[1em] w-[1em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
                        </svg>
                        <svg
                            fill="#222222"
                            className="h-[1em] w-[1em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path d="M288 439.6l-130.9 68.7C152.2 510.8 147.1 512 142.2 512c-18.59 0-35.17-16.66-31.61-37.45l25.04-145.5L29.72 226.1C10.68 207.6 21.2 175.3 47.47 171.5l146.4-21.29l65.43-132.4c5.883-11.91 17.33-17.8 28.73-17.8c.0234 0-.0234 0 0 0L288 439.6z" />
                        </svg>
                    </div>
                    <div className="w-fit h-fit text-black font-nunito text-[1.2em] font-light">
                        <p>4.5/5 stars</p>
                    </div>
                </div>
                <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
                    <div className="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer">
                        <p>Drama</p>
                    </div>
                    <div className="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer">
                        <p>Action</p>
                    </div>
                    <div className="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer">
                        <p>Balls</p>
                    </div>
                </div>
            </div>
            <p className="font-nunito block text-blackfont-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet officiis, dolorem ab animi magnam culpa fugit error
                voluptates adipisci, debitis ut fuga at nisi laborum suscipit a
                eos similique unde.
            </p>
        </div>
    );
};

export default Card;
