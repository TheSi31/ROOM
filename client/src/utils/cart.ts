import Cookies from 'js-cookie';

const CART_COOKIE_NAME = 'cart';

// Интерфейс для товаров в корзине
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Получение корзины из куки
export const getCart = (): CartItem[] => {
    const cart = Cookies.get(CART_COOKIE_NAME);
    return cart ? JSON.parse(cart) : [];
};

// Добавление товара в корзину
export const addToCart = (item: CartItem): void => {
    const cart = getCart();
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }

    Cookies.set(CART_COOKIE_NAME, JSON.stringify(cart), { expires: 7 });
};

// Удаление товара из корзины
export const removeFromCart = (itemId: number): void => {
    let cart = getCart();
    cart = cart.filter((cartItem) => cartItem.id !== itemId);
    Cookies.set(CART_COOKIE_NAME, JSON.stringify(cart), { expires: 7 });
};

// Очистка корзины
export const clearCart = (): void => {
    Cookies.remove(CART_COOKIE_NAME);
};
