import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
gsap.registerPlugin(ScrollTrigger);

export const Introduce = () => {

    const logo = useRef();
    const nameLogo = useRef();
    const tag1 = useRef();
    const tag2 = useRef();
    const tag3 = useRef();
    const tag4 = useRef();
    const tag5 = useRef();

    const {listRoom} = useSelector(state=>state.phong);


    useEffect(()=> {
        gsap.from(logo.current, {
            x: 700, 
            duration: 1,
            scrollTrigger: {
                trigger: logo.current,
                toggleActions: "restart resume resume resume"
            }
        })
        gsap.from(nameLogo.current, {
            x: -700, 
            duration: 1,
            scrollTrigger: {
                trigger: nameLogo.current,
                toggleActions: "restart resume resume resume"
            }
        })

        // gsap.from('', {
        //     y: 50,
        //     duration: 1,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: tag1.current,
        //         toggleActions: "restart pause pause resume"
        //     }
        // })
        // gsap.from(tag2.current, {
        //     y: 50,
        //     duration: 1,
        //     delay: 0.25,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: tag2.current,
        //         toggleActions: "restart pause pause resume"
        //     }
        // })
        // gsap.from(tag3.current, {
        //     y: 50,
        //     delay: 0.5,
        //     duration: 1,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: tag3.current,
        //         toggleActions: "restart pause pause resume"
        //     }
        // })
        // gsap.from(tag4.current, {
        //     y: 50,
        //     delay: 0.75,
        //     duration: 1,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: tag4.current,
        //         toggleActions: "restart pause pause resume"
        //     }
        // })
        // gsap.from(tag5.current, {
        //     y: 50,
        //     delay: 1,
        //     duration: 1,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: tag5.current,
        //         toggleActions: "restart pause pause resume"
        //     }
        // })
    }, [])

    useEffect(()=> {
        if(listRoom.length > 0) {
            // setTimeout(()=> {
                return listRoom.map((item, i)=> {
                    return gsap.from(`.img-${i}`, {
                        y: 50,
                        duration: 1,
                        delay: (0.25 + (i/4)),
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.img-${i}`,
                            toggleActions: "restart pause pause resume"
                        }
                    })
                })
            // }, 500)
        }
    }, [listRoom])

    const renderPhong = () => {
        return listRoom?.map((item, index) => {
            return <img src={item.image} className={`w-full h-[80px] md:h-[120px] lg:h-[170px] rounded-[10px] md:rounded-[20px] img-${index}`}/>
        })
    }

    return (
        <div className="w-full top-0 left-0 overflow-x-hidden z-[101] min-h-screen">
            <div className="py-[50px] md:py-[80px] lg:py-[100px] w-full flex bg-[#3790c7]">
                <div className="flex items-center justify-center flex-1" ref={nameLogo}>
                    <h4 className="text-[white] lg:text-[30px]">FLY ROOM</h4>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <img src='/images/fly.png' className="w-[180px] md:w-[270px] lg:w-[300px]" ref={logo}/>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[10px] md:gap-[20px] heheh p-[10px] md:p-[20px]">
                {
                    renderPhong()
                }
            </div>
        </div>
    )
}
