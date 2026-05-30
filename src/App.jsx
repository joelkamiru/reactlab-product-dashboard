import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const productsData=[
    {id:1, name:"Polo Tshirt", price:"ksh1500", inStock:true, image: "https://th.bing.com/th/id/OIP.md6pmr9Fh2rYAbdFaEauGwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3.jpeg"},
    {id:2, name:"Denim Pants", price:"ksh2000", inStock:true, image: "https://www.bing.com/th/id/OIP.UL_0qpjRxN6lrFLEzVbLTwHaLH?w=193&h=290&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2.jpeg"},
    {id:3, name:"Leather Jacket", price:"ksh3500", inStock:false, image: "https://www.bing.com/th/id/OIP.trgHvhRyIMcU8lupuBgl0QHaI4?w=193&h=231&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2.jpeg"}
  ]

  // TODO: Implement state to manage filtering

  const [filter, setFilter] = useState('all');

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = productsData.filter(product => {
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
      <ProductList products={filteredProducts} />
      
    </div>
    )
  
}
export default App;
