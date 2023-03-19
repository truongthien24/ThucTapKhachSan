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