"use client";

import React, { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 border rounded-md" />
      </div>
      
      <div className="flex flex-col space-y-2">
        <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
        <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="p-2 border rounded-md" />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="category" className="text-sm font-medium">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded-md">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          {/* Add other categories as per your requirement */}
        </select>
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </form>
  );
}
