"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <main className="max-w-2xl mx-auto mt-12 p-4 bg-gray-200 shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-black">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}

export default Page;
