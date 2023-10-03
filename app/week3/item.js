const Item = ({ name, quantity, category }, index) => {
    return (
        <li className={`flex justify-between p-4 my-2 rounded-md ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
            <span className="text-xl text-gray-700">{name}</span>
            <span className="text-lg text-gray-500">{quantity} ({category})</span>
        </li>
    );
};

export default Item;
