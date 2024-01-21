import React from "react";
import { Product_____Provider } from './Components/Product_Context';
import Product_Form from './Components/Product_Form';
import Product_List from './Components/Product_List';

function App() {
  return (
    <Product_____Provider>
      <div>
        <Product_Form />
        <Product_List />
      </div>
    </Product_____Provider>
  );
}

export default App;
