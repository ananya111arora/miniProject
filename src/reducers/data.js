const dataReducer = (state = { data: null }, action) => {
    switch(action.type) {
        case 'RESTAURANTS':
            return{ ...state, data: action.data, loading: false, errors: null };
        default:
            return state
    }
};

export default dataReducer;