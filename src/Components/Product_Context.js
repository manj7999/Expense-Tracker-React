import React, { createContext, useReducer, useEffect, useContext } from 'react';

// Step 1: Create Context
const ProductContext = createContext();

// Step 2: Define Reducer
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

// Step 3: Create Provider Component
const Product_____Provider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, [], () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Step 4: Create Hook for Context
const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export { Product_____Provider, useProductContext };
