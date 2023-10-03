const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between p-2 border-b border-gray-300">
            <span className="text-lg">{name}</span>
            <span className="text-sm text-gray-600">{quantity} ({category})</span>
        </li>
    );
};

export default Item;
