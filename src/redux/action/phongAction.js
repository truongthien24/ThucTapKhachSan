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
    }
    catch(error) {
        console.log('Lỗi rồi !');
    }
}