"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const sortedItems = [...itemsData];

    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div className="bg-gray-100 p-4 w-full min-h-screen">
            <div className="mb-4">
                <button
                    className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
