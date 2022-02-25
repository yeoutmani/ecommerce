import CartActionType from "./cart.types";

const IINITIA_STATE = {
   hidden: true    
};

const cartReducer = (state = IINITIA_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            
            return {
                ...state,
                hidden: !state.hidden
            };
    
        default:
            return state;
    }
}

export default cartReducer;