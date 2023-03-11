import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

export const layDuLieuPhong = () => async (dispatch) => {
    try {
        const phongRef = collection(db, 'Phong');
        const result = await getDocs(phongRef);
        dispatch({
            type: 'LAY_DU_LIEU',
            payload: result
        })
    } catch(error) {
        console.log('Lỗi rồi !');
    }
}

export const layDuLieuPhongInfo = (id) => async (dispatch) => {
    try {
        const phongRef = collection(db, 'Phong');
        const result = await getDocs(phongRef);
        const data = result.docs.filter((item)=> 
            item.id === id
        )
        if(data) {
            dispatch({
                type: 'LAY_DU_LIEU_PHONG_INFO',
                payload: data
            })
        }
    } catch(error) {
        console.log('Lỗi rồi !');
    }
}