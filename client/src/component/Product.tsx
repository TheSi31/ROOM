import React, { useState } from 'react';
import { addToCart } from '../utils/cart';
import './Product.css';

import Cart from '../img/Cart.svg';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

const Product: React.FC<ProductProps> = ({ id, name, description, price, img }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAddToCart = () => {
    const item = { id, name, price, quantity: 1 };
    addToCart(item);
    alert(`${name} добавлен в корзину!`);
  };


  return (
    <div className={`product ${isFlipped ? 'flipped' : ''}`}>
      <div className="product-inner">
        <div className="product-front">
          <img src={'http://localhost:3001/uploads/' + img} alt={name} />
          <div className="product-content">
            <h3>{name}</h3>
            <p className="price">{price} $</p>
            <button onClick={handleFlip}>&#8594;</button>
          </div>
        </div>
        <div className="product-back">
          <div className="product-content-back">
            <h3>{name}</h3>
            <p>{description}</p>
            <button className='product-buy' onClick={handleAddToCart}>
              <img src={Cart}></img>
            </button>
            <button onClick={handleFlip}>&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
