"use client";
import { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient).then(data => setMeals(data));
        } else {
            setMeals([]);
        }
    }, [ingredient]);

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal} className="text-black mb-2">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
