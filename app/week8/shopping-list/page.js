"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import { useUserAuth } from '../_utils/auth-context'; 
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json';

function Page() {
    const { user } = useUserAuth(); 
    const router = useRouter(); 
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemName, setSelectedItemName] = useState('');

    // Redirect if not logged in
    useEffect(() => {
        if (!user) {           
            router.push('/week8'); 
        }
    }, [user, router]);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        setSelectedItem(itemName);
        let cleanedItemName = itemName.split(",")[0].trim();
        if (cleanedItemName === 'spaghetti') cleanedItemName = 'pasta';
        setSelectedItemName(cleanedItemName);
    };

    // If the user is not logged in, return null or redirect
    if (!user) {
        return null; 
    }

    return (
        <main className="max-w-2xl mx-auto mt-12 p-4 bg-gray-200 shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-black">Shopping List</h1>
            <div className="flex">
                <div className="w-1/2 pr-2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} selectedItem={selectedItem} />
                </div>
                <div className="w-1/2 pl-2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}

export default Page;
