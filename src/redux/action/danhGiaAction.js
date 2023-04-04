import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

// Lấy dữ liệu đánh giá theo ID
export const layDuLieuDanhGiaPhong = (id) => async (dispatch) => {
    console.log('heheh')
    try {
        const dannhGiaRef = collection(db, 'danhGia');
        const danhGiaQuery = query(dannhGiaRef, where('idPhong', '==', id));
        const danhGiaResult = await  getDocs(danhGiaQuery);
        return danhGiaResult.docs.map((doc)=>({...doc.data(),id: doc.id}));
    } catch (err) {
        return false;
    }
}