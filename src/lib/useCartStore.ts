import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    totalPrice: number;
    addItem: (item: CartItem) => void;
    removeItem: (_id: string) => void;
    increaseQuantity: (_id: string) => void;
    decreaseQuantity: (_id: string) => void;
    clearCart: () => void;
    isHydrated: boolean;
    calculateTotalPrice: () => void; // Add method to calculate total price
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            totalPrice: 0,
            isHydrated: false,

            // Add item to cart
            addItem: (item) => {
                set((state) => {
                    const existingItem = state.items.find(
                        (cartItem) => cartItem._id === item._id
                    );
                    if (existingItem) {
                        return {
                            items: state.items.map((cartItem) =>
                                cartItem._id === item._id
                                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                                    : cartItem
                            ),
                        };
                    }
                    return { items: [...state.items, item] };
                });
                get().calculateTotalPrice(); // Recalculate total price after adding an item
            },

            // Remove item
            removeItem: (_id) => {
                set((state) => ({
                    items: state.items.filter((item) => item._id !== _id),
                }));
                get().calculateTotalPrice(); // Recalculate total price after removing an item
            },

            // Increase quantity
            increaseQuantity: (_id) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item._id === _id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }));
                get().calculateTotalPrice(); // Recalculate total price after increasing quantity
            },

            // Decrease quantity
            decreaseQuantity: (_id) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item._id === _id && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }));
                get().calculateTotalPrice(); // Recalculate total price after decreasing quantity
            },

            // Clear cart
            clearCart: () => {
                set({ items: [] });
                get().calculateTotalPrice(); // Recalculate total price after clearing cart
            },

            // Calculate total price
            calculateTotalPrice: () => {
                const total = get().items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                );
                set({ totalPrice: total });
            },
        }),
        {
            name: "cart-storage",
            onRehydrateStorage: () => {
                console.log("Rehydrating cart data...");
            },
        }
    )
);

