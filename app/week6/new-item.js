import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        onAddItem(item);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div className="text-black">
            <form onSubmit={handleSubmit}>
                <div className="m-2">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-1 w-full" />
                </div>
                <div className="m-2">
                    <label>Quantity:</label>
                    <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="border p-1 w-full" />
                </div>
                <div className="m-2">
                    <label>Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-1 w-full">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="m-2">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default NewItem;
