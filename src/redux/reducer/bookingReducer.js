
const initialValue = {
    listPhieuDatPhong: [],
}

export const BookingReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'LAY_DU_LIEU_BOOKING': {
            const data = action.payload.map(doc => ({...doc.data(), idPhieuDatPhong: doc.id}));
            state.listPhieuDatPhong = data;
            return {...state};
        } break;
        default: return state;
    }
}