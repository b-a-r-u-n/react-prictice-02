import { createContext, useContext } from "react";

export const ProductContext = createContext({
    datas: [],
    cart: [],
    totalAmount: " ",
    search: () => {},
    addToCart: (data) => {},
    removeCart: () => {},
    handaleCount: (data, num) => {},
    handaleTotalAmount: () => {}
});

export const ProductProvider = ProductContext.Provider;

export const useProduct = () => {
    return useContext(ProductContext);
}