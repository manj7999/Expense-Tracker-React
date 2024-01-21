import React from 'react';
import { useProductContext } from './Product_Context';

const ProductList = () => {
  const { products, dispatch } = useProductContext();

  const handleDeleteProduct = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const calculateTotalWorth = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.price} - {product.name} {" "}
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete Product
            </button>
          </li>
        ))}
      </ul>
      <p>Total value Worth of products: Rs {calculateTotalWorth()}</p>
    </div>
  );
};

export default ProductList;
