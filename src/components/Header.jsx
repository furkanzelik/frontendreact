import React from "react";
import logo from './../assets/images/aoe-logo.png'

function Header(){
    return(
        <div className='flex justify-between items-center mt-2'>
         <img src={logo} className='w-[300px]' />
            <ul className='flex gap-4 md:gap-14'>
                <li className='hover:font-light text-black' >Home</li>
                <li className='hover:font-light text-black'>About the game</li>
                <li className='hover:font-light text-black'>Contact</li>
            </ul>
        </div>
    )
}

export default Header