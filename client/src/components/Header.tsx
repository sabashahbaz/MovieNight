import React from 'react'
import logo from '../assets/images/logo.png'
import {HiHome, HiMagnifyingGlass,HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";


const Header = () => {
    const menu = [
        {
            name: 'HOME',
            icon:HiHome
        },
        {
            name: 'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon:HiPlus
        },
        {
            name: 'ORIGINALS',
            icon:HiStar
        },
        {
            name: 'MOVIES',
            icon:HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
        
    ]
    return(
        <div>
            <img src={logo} alt="logo" className = 'w-[200px] md:w-[215px] lg:[240px] object-cover'/>
        </div>
    )
}
export default Header