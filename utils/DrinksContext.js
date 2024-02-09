import React, { createContext, useContext, useState } from 'react';

const DrinksContext = createContext();

export const useDrinks = () => useContext(DrinksContext);

export const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = (drinkName) => {
        setDrinks(currentDrinks => {
            return currentDrinks.map(drink => {
                if (drink && drink.name === drinkName) {
                    return { ...drink, quantity: drink.quantity + 1 };
                }
                return drink;
            });
        });
        setCartCount(prevCartCount => prevCartCount + 1);
    };

    return (
        <DrinksContext.Provider value={{ drinks, setDrinks, cartCount, setCartCount, updateCartCount }}>
            {children}
        </DrinksContext.Provider>
    );
};
