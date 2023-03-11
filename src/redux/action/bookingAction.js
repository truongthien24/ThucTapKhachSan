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
                email: data.email,
                soNgay: data.soNgay,
                ngayBatDauThue: data.ngayBatDauThue,
                tinhTrang: false,
                tongGia: data.tongGia,
                idDatPhong: data.idDatPhong
            });
            dispatch(setLoading({
                status: 'done'
            }))
        }, 1000)
    } catch (error) {
        console.log('Lỗi rồi')
    }
}