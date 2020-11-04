// basket state 
export const initialState = {basket: [], user: null};

// sum of items in the basket 
export const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
}

export default function reducer(state, action) {
    console.log(action); 
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state, 
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0){
                // item exists in the basket, remove it  
                newBasket.splice(index, 1);
                // return newBasket;
            } else{
                console.warn(`Can't remove the product id: ${action.id} as it's not in the basket!`);
            }
            return {...state, basket: newBasket};
        default: 
            return {...state};
    }
}
