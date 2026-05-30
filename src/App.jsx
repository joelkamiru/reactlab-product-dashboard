import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const initialProducts=[
    {id:1, name:"Laptop", price:"ksh75000", inStock:true, image: "https://www.bing.com/th/id/OIP.sTNL4tqO4KG7OWX3W_lFfAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2.jpeg"},
    {id:2, name:"Phone", price:"ksh120000", inStock:true, image: "https://www.bing.com/th/id/OIP.gBRS3kJpkrZ0VbZlaNECDgHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2.jpeg"},
    {id:3, name:"Tablet", price:"ksh30000", inStock:false, image: "https://www.bing.com/th/id/OIP.c034wcEWDaq9DBdPHH7KuAHaFB?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2.jpeg"}
  ]

  // TODO: Implement state to manage filtering
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true
  });

  return (
    <div>
      <h1 id="header">Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>

      {/* TODO: Render the ProductList component and pass filtered products */}
      
      <ProductList products={filteredProducts} onDelete={handleDelete} />
      
    </div>
    )
  
}
export default App;
