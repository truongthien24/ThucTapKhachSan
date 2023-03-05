

const initialState = {
    phongInfo: {}
}

export const PhongReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LAY_DU_LIEU': {
            state.phongInfo = action.payload.docs[0].data();
            return {...state};
        }
        break;
        default: return state;
    }
}