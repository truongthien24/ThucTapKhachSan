import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
 
const language = localStorage.getItem('language');

const resources = {
    en: {
      translation: {
        "booking": "Booking",
        "seeAll": "See all",
        "aboutUs": "About us",
        "contact": "Contact",
        "logOut": "Logout",
        "login": "Login",
        "noAccount": "No account",
        "cancel": "Cancel",
        "forgotPassword": "Forgot password",
        "listRoom": "List room",
        "seeMore": 'See more',
        "reasonBooking": "Reasons you should book our room",
        "priceCheap": "Cheap price every day with special offer",
        "help24/7": "24/7 support",
        "feelbackReal": "Objective reviews from customers",
        "findAHotel": "Find a hotel",
        "thereStillRoom": "There's still room",
        "outOfRoom": "Out of room",
        "reservationTicket": "Reservation Ticket",
        "check": "Check",
        "confirmed": "Confirmed",
        "FuncIsDev": "Function is developing !",
        "ok": "OK",
        "haveRoom": "Have room",
        "outOfRoom": "Out of room",
        "register": "Register",
        "roomIsSoldOut": "Sorry the room is sold out",
        "youAreNotLoggedIn": "You are not logged in",
        "back": "Back",
        "I'mTheAdministrator": "I'm the administrator",
        "I'mACustomer": "I'm a customer",
        "seeProfile": "View profile",
        "service": "Service",
        "youHaveNotBook": "You have not booked any rooms yet",
        "quantityIsOut": "Quantity is out",
        "bookService": "Booking",
        "hi": "Hi",
      },
    },
    kr: {
      translation: {
        "booking": "책방",
        "seeAll": "모두 보기",
        "aboutUs": "우리에 대해",
        "contact": "연락하다",
        "logOut": "로그 아웃",
        "login": "로그인",
        "noAccount": "계정 없음",
        "cancel": "취소",
        "forgotPassword": "비밀번호를 잊으 셨나요",
        "listRoom": "방 목록",
        "seeMore": '더보기',
        "reasonBooking": "우리 방을 예약해야 하는 이유",
        "priceCheap": "특별 제공으로 매일 저렴한 가격",
        "help24/7": "연중무휴 지원",
        "feelbackReal": "고객의 객관적인 리뷰",
        "findAHotel": "호텔 찾기",
        "thereStillRoom": "아직 여유가 있다",
        "outOfRoom": "더 이상 방이 없다",
        "reservationTicket": "예매권",
        "check": "확인",
        "confirmed": "확인됨",
        "FuncIsDev": "개발 중인 기능",
        "ok": "동의하다",
        "haveRoom": "여유가 있다",
        "outOfRoom": "방밖",
        "register": "등록하다",
        "roomIsSoldOut": "죄송합니다 방이 매진되었습니다",
        "youAreNotLoggedIn": "로그인하지 않았습니다",
        "back": "뒤쪽에",
        "I'mTheAdministrator": "나는 관리자입니다",
        "I'mACustomer": "나는 고객이다",
        "seeProfile": "프로필 보기",
        "service": "서비스",
        "youHaveNotBook": "아직 객실을 예약하지 않았습니다",
        "quantityIsOut": "수량 부족",
        "bookService": "서비스를 요청하다",
        "hi": "안녕하세요",
      },
    },
    vi: {
      translation: {
        "booking": "Đặt phòng",
        "seeAll": "Xem tất cả",
        "aboutUs": "Về chúng tôi",
        "contact": "Liên hệ",
        "logOut": "Đăng xuất",
        "login": "Đăng nhập",
        "noAccount": "Chưa có tài khoản",
        "cancel": "Huỷ bỏ",
        "forgotPassword": "Quên mật khẩu",
        "listRoom": "Danh sách phòng",
        "seeMore": 'Xem thêm',
        "reasonBooking": "Lý do bạn nên đặt phòng",
        "priceCheap": "Giá rẻ mỗi ngày với ưu đãi đặc biệt",
        "help24/7": "Hỗ trợ khách hàng 24/7",
        "feelbackReal": "Đánh gía khách quan từ khách hàng",
        "findAHotel": "Tìm khách sạn",
        "thereStillRoom": "Còn phòng",
        "outOfRoom": "Hết phòng",
        "reservationTicket": "Phiếu đặt phòng",
        "check": "Đang xác nhận",
        "confirmed": "Đã xác nhận",
        "FuncIsDev": "Chức năng đang phát triển !",
        "ok": "Đồng ý",
        "haveRoom": "Còn phòng",
        "outOfRoom": "Hết phòng",
        "register": "Đăng ký",
        "roomIsSoldOut": "Rất tiếc phòng đã hết !",
        "youAreNotLoggedIn": "Bạn chưa đăng nhập",
        "back": "Trở về",
        "I'mTheAdministrator": "Tôi là quản trị viên",
        "I'mACustomer": "Tôi là khách hàng",
        "seeProfile": "Xem trang cá nhân",
        "service": "Dịch vụ",
        "youHaveNotBook": "Bạn chưa đặt phòng nào",
        "quantityIsOut": "Số lượng đã hết",
        "bookService": "Đặt dịch vụ",
        "hi": "Xin chào",
      },
    }
};

i18n.use(initReactI18next).init({
    resources,
    // lng: "en",
    lng: `${language}`,
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
});

export default i18n;










