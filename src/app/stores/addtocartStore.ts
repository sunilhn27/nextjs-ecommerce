import { create } from 'zustand';


interface IProductProps {
    id: string;
    image: string;
    title: string;
    price: number;
    description?: string;
    category?: string;
    quantity?: number;
}


interface CartState {
    cart: IProductProps[];
    addToCart: (product: IProductProps) => void;
    removeFromCart: (id?: string) => void;
    clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: (item.quantity || 1) + 1 }
                            :item
                    ),
                };
            } else {
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((product) => product.id !== id),
        })),
    clearCart: () =>
        set(() => ({
            cart: [],
        })),
}));

export default useCartStore;
