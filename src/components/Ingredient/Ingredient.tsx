import React from 'react';
import './Ingredient.css';

interface IngredientProps {
    name: string;
    image: string;
    count: number;
    onAdd: () => void;
    onRemove: () => void;
}

const Ingredient: React.FC<IngredientProps> = ({ name, image, count, onAdd, onRemove }) => {
    return (
        <div className="Ingredient">
            <img src={image} alt={name} />
            <div className="IngredientName">{name}</div>
            <div className="IngredientCount">{count}</div>
            <button onClick={onAdd}>Добавить</button>
            <button onClick={onRemove}>Убрать</button>
        </div>
    );
};

export default Ingredient;