import { db } from '../../firebase/firebase.config';
import { collection, getDocs } from 'firebase/firestore'; 
import { setLoading } from './homeAction';

export const getAllDichVu = () => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        const dichVuRef = collection(db, 'dichVu');
        setTimeout(async()=> {
            const result = await getDocs(dichVuRef);
            dispatch({
                type: 'LAY_TAT_CA_DICH_VU',
                payload: result.docs.map((doc)=>({...doc.data(),id:doc.id}))
            })
            dispatch(setLoading({
                status: 'done'
            }))
        }, 1000)
    } catch (error) {
        console.log(error)
    }
} 