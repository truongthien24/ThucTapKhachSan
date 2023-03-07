

const initialValue = {
    statusLoading: false,
}

export const homeReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'IS-LOADING': {
            const a = true;
            state.statusLoading = a
            return {...state};
        } break;
        case 'DONE-LOADING': {
            const a = false;
            state.statusLoading = a;
            return {...state.statusLoading};
        } break;
        default: return state;
    }
}