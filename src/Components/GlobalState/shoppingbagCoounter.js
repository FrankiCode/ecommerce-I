import { create } from "zustand";


const useAddToCart = create((set) => ({
    count: 0,
    add: () => set((state) => ({
        count: state.count + 1,
    })),
    count: 0,
}));

export default useAddToCart;