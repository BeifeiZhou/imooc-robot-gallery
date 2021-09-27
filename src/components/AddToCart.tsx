import React, { useContext } from 'react'
import { appSetStateContext } from "../AppState";

export const useAddToCart = () => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
        if (setState) {
            // 思考: 同学们可以想一想如何化简这里的代码
            setState((state) => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }],
                    },
                };
            });
        }
    }
    return addToCart;
}