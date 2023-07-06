import React, { useState } from "react";

const MenuLinks = ({ children, active, setActive, setIsShow }) => {
    return (

        <div
            onClick={() => setActive(children)}
            className='flex items-center cpase-x-2'
        >
            {/* <img src="/strokeMenu.webp" className={`${active === children ? 'block' : 'hidden'}`} alt="" /> */}
            <a
                onClick={() => { setIsShow(isShow => !isShow) }}
                href={`#${children}`} className='font-rosario'>{children}</a>
        </div>
    )
}
export default MenuLinks