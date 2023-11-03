import React from 'react';
import './Burger.css';

interface BurgerProps {
    ingredients: { name: string; image: string; count: number }[];
    totalPrice: number;
    onAddIngredient: (name: string) => void;
    onRemoveIngredient: (name: string) => void;
}

const Burger: React.FC<BurgerProps> = ({ ingredients, totalPrice}) => {
    const ingredientClasses: { [name: string]: string } = {
        Salad: 'Salad',
        Cheese: 'Cheese',
        Meat: 'Meat',
        Bacon: 'Bacon',
    };

    const burgerContent = ingredients.map((ingredient, index) => {
        const ingredientElements = [];

        for (let i = 0; i < ingredient.count; i++) {
            ingredientElements.push(
                <div key={index + i} className={ingredientClasses[ingredient.name]}></div>
            );
        }

        return ingredientElements;
    });

    return (
        <div className="Burger">
            <h2>Бургер</h2>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {burgerContent}
            <div className="BreadBottom"></div>
            <div className="TotalPrice">
                <strong>Итого: {totalPrice} сом</strong>
            </div>
        </div>
    );
};

export default Burger;
