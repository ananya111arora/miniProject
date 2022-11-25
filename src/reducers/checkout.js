const checkoutReducer = (state = { checkoutData: null}, action) => {
    switch(action.type) {
        case 'CHECKOUT':
            return { ...state, checkoutData: action.data, loading: false, errors: null };
        default:
            return state
    }
};
    
export default checkoutReducer;