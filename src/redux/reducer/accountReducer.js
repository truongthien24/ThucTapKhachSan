
const initialState = {
    userInfo: {},
    statusLogin: false,
}


export const AccountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DANG_NHAP_USER': {
            console.log('action.payload',  action.payload.data[0])
            if(action.payload.data[0]) {
                state.userInfo = action.payload.data[0];
                state.statusLogin = true;
                localStorage.setItem("jwt", JSON.stringify(action.payload.data[0]));
                window.location.replace('/user');
            } else {
                state.statusLogin = false;
            }
            return {...state};
        }
        break;
        default: return state;
    }
}