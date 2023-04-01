import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { setLoading } from "./homeAction";

export const layDuLieuPhong = () => async (dispatch) => {
    try {
        const phongRef = collection(db, 'Phong');
        const result = await getDocs(phongRef);
        dispatch({
            type: 'LAY_DU_LIEU',
            payload: result
        })
    } catch(error) {
        console.log(error);
    }
}

export const layDuLieuPhongTheoParams = (data) => {
    return async (dispatch) => {
        const phongRef = collection(db, 'Phong');
        const result = await getDocs(phongRef);
        let dataResult = [];
        if(data.memberPar === "" && data.priceFromPar === "" && data.priceToPar === "") {
            dataResult = result.docs.map((doc)=>({...doc.data(), id: doc.id}));
        }   
        if(dataResult) {
            return dataResult;
        }
    }
}

export const layDuLieuPhongInfo = async (id) => {
    try {
        const phongRef = collection(db, 'Phong');
        const result = await getDocs(phongRef);
        const data = result.docs.filter((item)=> 
            item.id === id
        )
        if(data) {
            // dispatch({
            //     type: 'LAY_DU_LIEU_PHONG_INFO',
            //     payload: data
            // })
            // console.log('data[0].data()', data[0].data())
            return data[0].data();
        }
        else {
            return [];
        }
    } catch(error) {
        console.log('Lỗi rồi !');
    }
}


// Lấy dữ liệu phòng từ phiếu đặt phòng
export const getInfoRoomFormBooking = (data) => async (dispatch) => {
    try {
        console.log('data', data);
        const phongRef = collection(db, 'Phong');
        const result = await getDocs(phongRef);
        
    } catch (error) {
        console.log(error);
    }
}


// Lấy số lượng phòng của phòng theo id 
export const getSoLuongPhong = (data) => async (dispatch) => {
    try {
        const phongRef = doc(db, 'Phong', data);
        const result = await getDoc(phongRef);
        return result.data().soLuongPhong;
    } catch (error) {
        console.log(error);
    }
} 


// Cập nhật phòng
export const updateRoom = (data) => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }));
        setTimeout(async()=> {
            const roomRef = doc(db, 'Phong', data.data.id);
            await updateDoc(roomRef, {...data.data, checkout: true});
            dispatch(setLoading({
                status: 'done'
            }));
        }, 1000)
    } catch (error) {
        console.log(error)
    }
}