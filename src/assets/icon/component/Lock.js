import React from 'react'

export const Lock = (props) => {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" color={`${props.color ? props.color : 'none'}`} className={`${props.font === "small" ? "w-4 h-4" : "w-6 h-6"}`} fill={`${props.fill ? props.fill : 'none'}`}>
    //     <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={`${props.color ? props.color : 'none'}`} className={`${props.font === "small" ? "w-4 h-4" : "w-6 h-6"}`} fill={`${props.fill ? props.fill : 'currentColor'}`}>
        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
    </svg>

  )
}
