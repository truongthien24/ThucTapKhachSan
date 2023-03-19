
const initialState = {
    userInfo: {},
    statusLogin: false,
}


export const AccountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DANG_NHAP_USER': {
            if(action.payload.data[0]) {
                state.userInfo = action.payload.data[0];
                state.statusLogin = true;
                localStorage.setItem("jwt", JSON.stringify(action.payload.data[0].id));
                window.location.replace('/user');
            } else {
                state.statusLogin = false;
            }
            return {...state};
        }
        break;
        case 'LAY_DU_LIEU_USER': {
            state.userInfo = action.payload;
            return {...state};
        }
        default: return state;
    }
}