import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
   {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      const cardClassName = product.inStock 
    ? styles.card : `${styles.card} ${styles.outOfStock}`;
  return (
    <div className={cardClassName}>

      <img src={product.image} alt={product.name} className={styles.productImg} />
     
   {/* Display product name */}
      <h3>{product.name}</h3>

      {/* Display product price */}
      <p>Price: {product.price}</p>

      {/* Show if the product is in stock or out of stock */}
      
        <p>Availability: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      
      
    </div>
  )
};

export default ProductCard;
