import { collection, getDocs, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase.config";
import { setLoading } from "./homeAction";

export const createBooking = (data) => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        setTimeout(async ()=> {
            await addDoc(collection(db, "phieuDatPhong"), {
                hoTen: data.hoTen,
                sdt: data.sdt,
                cccd: data.cccd,
                soNgay: data.soNgay,
                ngayBatDauThue: data.ngayBatDauThue,
                tinhTrang: false,
                tongGia: data.tongGia,
                idKhachHang: data.idKhachHang,
                idPhong: data.idPhong
            });
            dispatch(setLoading({
                status: 'done'
            }))
        }, 1000)
    } catch (error) {
        console.log('Lỗi rồi')
    }
}

// Lấy dữ liệu tất cả phiếu đặt phòng 
export const getAllBooking = () => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        setTimeout(async ()=> {
            const phieuDatPhongRef = collection(db, 'phieuDatPhong');
            const dataRef = await getDocs(phieuDatPhongRef);
            dispatch({
                type: 'LAY_DU_LIEU_BOOKING',
                payload: dataRef.docs.map((item)=> ({...item.data(), id: item.id}))
            })
            dispatch(setLoading({
                status: 'done'
            }))
        }, 1000)
    } catch (error) {
        console.log('Lỗi rồi')
    }
}

// Lấy dữ liệu phiếu đặt phòng theo id
export const getBooking = () => async (dispatch) => {
    try {
        const phieuDatPhongRef = collection(db, 'phieuDatPhong');
        const dataRef = await getDocs(phieuDatPhongRef);

        const result = dataRef.docs.filter((doc) => doc.data().idKhachHang == (JSON.parse(localStorage.getItem('jwt'))));

        // console.log('result', result);

        dispatch({
            type: 'LAY_DU_LIEU_BOOKING_ID',
            payload: result
        })
    } catch (error) {
        console.log('Lỗi rồi 22!');
    }
}

// Kiểm tra đã có phiếu đặt phòng chưa
export const checkBooking = () => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        const phieuDatPhongRef = collection(db, 'phieuDatPhong');
        const dataRef = await getDocs(phieuDatPhongRef);

        const result = dataRef.docs.filter((doc) => doc.data().idKhachHang == (JSON.parse(localStorage.getItem('jwt'))));

        if(result.length > 0) {
            dispatch(setLoading({
                status: 'done'
            }))
            return true;
        } else {
            dispatch(setLoading({
                status: 'done'
            }))
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}


