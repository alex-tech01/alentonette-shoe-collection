import { writable } from 'svelte/store';

export const cart = writable([]);

// Utility: Add item to cart
export function addToCart(product) {
    cart.update(items => {
        const existing = items.find(item => item.id === product.id);
        if (existing) {
            return items.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...items, { ...product, quantity: 1 }];
        }
    });
}

// Utility: Remove item from cart
export function removeFromCart(id) {
    cart.update(items => items.filter(item => item.id !== id));
}
