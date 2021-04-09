import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import { Typography } from '@material-ui/core';


const Product = ({ product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <>
      <div className="menu__content">
        <img src={product.media.source} alt="" className="menu__img" />
        <h3 className="menu__name">{product.name}</h3>
        <span className="menu__detail">
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </span>
        <span className="menu__preci">${product.price.formatted}</span>
        <a href="#" className="button menu__button" aria-label="Add to Cart" onClick={handleAddToCart}><AddShoppingCart /></a>
      </div>
    </>
  )
}

export default Product;



