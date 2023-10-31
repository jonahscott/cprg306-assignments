const Item = ({ name, quantity, category, onSelect, isSelected }, index) => {
    return (
        <li 
            className={`flex justify-between p-4 my-2 rounded-md ${isSelected ? 'bg-blue-200' : index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
            onClick={onSelect}
        >
            <span className="text-xl text-gray-700">{name}</span>
            <span className="text-lg text-gray-500">{quantity} ({category})</span>
        </li>
    );
};

export default Item;
