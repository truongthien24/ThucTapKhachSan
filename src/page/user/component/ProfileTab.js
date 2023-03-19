import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const ProfileTab = (props) => {

    // Props
    const {setIsProfile, isProfile} = props;

    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isProfile && ref.current && !ref.current.contains(e.target)) {
            setIsProfile(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener \
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [setIsProfile])

    // Return
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[998] bg-[#0303038f]">
            <div className="bg-white h-full w-[70%] md:w-[60%] lg:w-[30%] p-[20px] md:p-[30px] absolute fadeOn" ref={ref}>
                <div className="bg-gray-100 rounded-[10px] py-[10px] px-[15px] flex items-center">
                    <img className="w-[60px] h-[60px] rounded-[50%]" src="https://img5.thuthuatphanmem.vn/uploads/2022/01/12/anh-tokuda-dep-nhat_101702809.jpg"/>
                    <div className="">
                        <h5>{}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
