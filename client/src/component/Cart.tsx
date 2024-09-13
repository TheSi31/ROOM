// src/components/Cart.tsx
import React from 'react';
import { getCart, removeFromCart, clearCart } from '../utils/cart';

import './Cart.css';

import Trash_can from '../img/trash-can.svg';

const Cart: React.FC = () => {
    const cartItems = getCart();

    const handleRemove = (id: number) => {
        removeFromCart(id);
        window.location.reload();
    };

    const handleClear = () => {
        clearCart();
        window.location.reload();
    };

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={`http://localhost:3001/api/getPhotoViaID/${item.id}`} alt={item.name} />
                                {item.name} - {item.price} $ x {item.quantity}
                                <button onClick={() => handleRemove(item.id)}>
                                    <img src={Trash_can} alt="Удалить из корзины"></img>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className='cart-clear' onClick={handleClear}>Очистить корзину</button>
                </>
            )}
        </div>
    );
};

export default Cart;

