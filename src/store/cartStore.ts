import { useState, useCallback } from "react";

export interface CartItem {
  id: number;
  slug: string;
  title: string;
  price: number;
  image: string;
  qty: number;
}

let cartItems: CartItem[] = [];
const listeners: (() => void)[] = [];

function notify() {
  listeners.forEach((l) => l());
}

export function getCart() {
  return cartItems;
}

export function getCartCount() {
  return cartItems.reduce((s, i) => s + i.qty, 0);
}

export function getCartTotal() {
  return cartItems.reduce((s, i) => s + i.price * i.qty, 0);
}

export function addToCart(item: Omit<CartItem, "qty">) {
  const existing = cartItems.find((i) => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cartItems = [...cartItems, { ...item, qty: 1 }];
  }
  notify();
}

export function removeFromCart(id: number) {
  cartItems = cartItems.filter((i) => i.id !== id);
  notify();
}

export function updateQty(id: number, qty: number) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  cartItems = cartItems.map((i) => (i.id === id ? { ...i, qty } : i));
  notify();
}

export function clearCart() {
  cartItems = [];
  notify();
}

export function useCart() {
  const [, setTick] = useState(0);
  const rerender = useCallback(() => setTick((t) => t + 1), []);

  if (!listeners.includes(rerender)) {
    listeners.push(rerender);
  }

  return {
    items: getCart(),
    count: getCartCount(),
    total: getCartTotal(),
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
  };
}
