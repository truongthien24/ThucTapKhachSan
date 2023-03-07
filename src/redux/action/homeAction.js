
export const setLoading = (data) => async (dispatch) => {
    try {
        if(data.status === 'isLoading') {
            dispatch({
                type: 'IS-LOADING',
                payload: null
            })
        } else {
            dispatch({
                type: 'DONE-LOADING',
                payload: null
            })
        }
    } catch(error) {
        console.log('Lỗi rồi!');
    }
}