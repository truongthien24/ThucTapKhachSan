import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase.config";
import { setLoading } from "./homeAction";

export const loginUser = (data) => async (dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        const accountRef = collection(db, 'Account');
        const result = await getDocs(accountRef);
        // console.log('result docs', result.docs[0].data());
        
        const dataResult = result.docs.map((doc)=> ({...doc.data()}));

        const findUser = dataResult?.filter((item)=>  item?.userName === data?.data?.userName && item?.password === data?.data?.password );

        console.log('findUser', findUser);

        if(findUser.length > 0) {
            setTimeout(()=> {
                dispatch({
                    type: 'DANG_NHAP_USER',
                    payload: {
                        data: findUser,
                        status: 200
                    }
                })
            }, 1000)
        } else {
            // setTimeout(()=> {
            //     dispatch({
            //         type: 'DANG_NHAP_USER',
            //         payload: {
            //             data: null,
            //             status: 500
            //         }
            //     })
            // }, 1000)
            // alert()
            setTimeout(()=> {
                dispatch(setLoading({
                    status: 'done'
                }))
                let timerInterval;
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng nhập không thành công!',
                    timer: 2000,
                    timerProgressBar: true,
                    confirmButtonColor: '',
                    // didOpen: () => {
                    //     Swal.showLoading()
                    //     const b = Swal.getHtmlContainer().querySelector('b')
                    //     timerInterval = setInterval(() => {
                    //     b.textContent = Swal.getTimerLeft()
                    //     }, 100)
                    // },
                    // willClose: () => {
                    //     clearInterval(timerInterval)
                    // }
                })
            }, 1000)
        }
    }
    catch(error) {
        dispatch({
            type: 'DANG_NHAP_USER',
            payload: {
                data: null,
                status: 500
            }
        })
    }
}