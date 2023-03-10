

const initialState = {
    listRoom: []
}

export const PhongReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LAY_DU_LIEU': {
            state.listRoom = action.payload.docs.map((doc)=>({...doc.data()}));
            return {...state};
        }
        break;
        default: return state;
    }
}