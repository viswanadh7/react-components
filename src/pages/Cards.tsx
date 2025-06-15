import Card1 from '../components/cards/Card1';
import Card2 from '../components/cards/Card2';
import Card3 from '../components/cards/Card3';
import Card4 from '../components/cards/Card4';
import Card5 from '../components/cards/Card5';
import Card6 from '../components/cards/Card6';
import Card7 from '../components/cards/Card7';
import Card8 from '../components/cards/Card8';
import Card9 from '../components/cards/Card9';

const Cards = () => {
    return (
        <div className="bg-gray-200 grid md:grid-cols-2 lg:grid-cols-3 gap-20 p-10">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
            <Card8 />
            <Card9 />
        </div>
    );
};

export default Cards;
