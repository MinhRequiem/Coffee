import React from 'react';
import Product from './Product/Product';


const Products = ({ products, onAddToCart }) => {

  if (!products.length) return <p>Loading...</p>;

  return (
    <section className="menu section bd-container" id="menu">
      <span className="section-subtitle">Special</span>
      <h2 className="section-title">Menu of the week</h2>
      <div className="menu__container bd-grid">
        {products.map((product) => (
          <Product product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>



  );
};

export default Products;

