import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase.config";
import { setLoading } from "./homeAction";
import { updateRoom } from "./phongAction";

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
                idPhong: data.idPhong,
                createAt: serverTimestamp()
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


// Cập nhật (xác nhận) phiếu đặt phòng
export const updateBooking = (data) => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        setTimeout(async()=> {
            const bookingRef = doc(db, 'phieuDatPhong', data.data.id);
            const phongRef = doc(db, 'Phong', data.data.idPhong);
            const a = data.data.tinhTrang === 'true' ? true : false;
            delete data.data.tinhTrang;
            const result = await getDoc(phongRef);
            const dataTest = {...result.data(), soLuongPhong: result.data()?.soLuongPhong?.map((item)=>
                {
                    if(item.soPhong === data.data.soPhong) {
                        return {
                            ...item,
                            tinhTrang: true,
                        }
                    } else {
                        return {...item}
                    }
                }
            )}
            await updateDoc(bookingRef, {...data.data, tinhTrang: a});
            await updateDoc(phongRef, {...dataTest});
            // console.log('phongRef', await getDoc(phongRef).data());
            dispatch(setLoading({
                status: 'done'
            }))
            Swal.fire({
                icon: 'success',
                title: 'Cập nhật thành công !',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true
            })
            return true;
        }, 1000);
    } catch (error) {
        console.log('Lỗi rồi !');
        return false;
    }
}


// Cancel phiếu đặt phòng
export const cancelBooking = (data) => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        setTimeout(async()=> {
            await deleteDoc(doc(db, "phieuDatPhong", data.data.id));
            dispatch(setLoading({
                status: 'done'
            }))
            Swal.fire({
                icon: 'success',
                title: 'Xoá thành công !',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true
            })
        }, 1000)
    } catch (error) {
        console.log(error);
    } 
}

// Phiếu đặt phòng về trạng thái checkout
export const chekoutBooking = (data) => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }));
        setTimeout(async()=> {
            const bookingRef = doc(db, 'phieuDatPhong', data.data.id);
            // const a = data.data.tinhTrang === 'true' ? true : false;
            // delete data.data.tinhTrang;
            await updateDoc(bookingRef, {...data.data, checkout: true});
            dispatch(setLoading({
                status: 'done'
            }))
            Swal.fire({
                icon: 'success',
                title: 'Xoá thành công !',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true
            })
            dispatch(setLoading({
                status: 'done'
            }));
        }, 1000)
    } catch (error) {
        return false;
    }
}