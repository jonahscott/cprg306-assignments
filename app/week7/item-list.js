import Item from './item';
import { useState } from 'react';

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className="bg-gray-100 p-4 w-full min-h-screen">
            <div className="flex justify-between mb-4">
                <div>
                    <button 
                        className={`p-2 m-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setSortBy('name')}
                    >
                        Sort by Name
                    </button>
                    <button 
                        className={`p-2 m-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setSortBy('category')}
                    >
                        Sort by Category
                    </button>
                </div>
            </div>
            <ul>
                {sortedItems.map((item, index) => (
                    <Item key={index} {...item} index={index} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
