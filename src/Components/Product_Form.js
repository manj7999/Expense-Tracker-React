import React, { useState } from "react";
import { useProductContext } from "./Product_Context";

const ProductForm = () => {
  const { dispatch } = useProductContext();
  const [newProduct, setNewProduct] = useState({ id: "", name: "", price: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const product = {
        id: Date.now(), 
        name: newProduct.name,
        price: parseInt(newProduct.price),
      };
      dispatch({ type: "ADD_PRODUCT", payload: product });
      setNewProduct({ id: "", name: "", price: "" });
    }
  };

  return (
    <div>
      <h3>Add Product</h3>
      <label>
        Product ID:
        <input
          type="text"
          name="id"
          value={newProduct.id}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Selling Price:
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
