const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between p-4 my-2 bg-white text-black border rounded-md">
            <span className="text-xl">{name}</span>
            <span className="text-lg">{quantity} ({category})</span>
        </li>
    );
};
