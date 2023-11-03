import { useState } from 'react';
import './App.css';
import Ingredient from './components/Ingredient/Ingredient';
import Burger from './components/Burger/Burger';

import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';

const ingredientsData = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: baconImage },
];

function App() {
    const [ingredients, setIngredients] = useState(
        ingredientsData.map((ingredient) => ({ ...ingredient, count: 0 }))
    );

    const handleAddIngredient = (name: string) => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((ingredient) =>
                ingredient.name === name ? { ...ingredient, count: ingredient.count + 1 } : { ...ingredient }
            )
        );
    };

    const handleRemoveIngredient = (name: string) => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((ingredient) =>
                ingredient.name === name && ingredient.count > 0
                    ? { ...ingredient, count: ingredient.count - 1 } : { ...ingredient }
            )
        );
    };

    const calculateTotalPrice = () => {
        return ingredients.reduce((total, ingredient) => total + ingredient.price * ingredient.count, 30);
    };

    const resetIngredients = () => {
        setIngredients(ingredientsData.map((ingredient) => ({ ...ingredient, count: 0 })));
    };

    return (
        <div className="App">
            <div className="Ingredients">
                {ingredients.map((ingredient) => (
                    <Ingredient
                        key={ingredient.name}
                        name={ingredient.name}
                        image={ingredient.image}
                        count={ingredient.count}
                        onAdd={() => handleAddIngredient(ingredient.name)}
                        onRemove={() => handleRemoveIngredient(ingredient.name)}
                    />
                ))}
                <button onClick={resetIngredients}>Сбросить всё</button>
            </div>
            <Burger
                ingredients={ingredients}
                totalPrice={calculateTotalPrice()}
                onAddIngredient={handleAddIngredient}
                onRemoveIngredient={handleRemoveIngredient}
            />
        </div>
    );
}

export default App;