import React, {useState} from 'react'
import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'
import {HiHome, HiMagnifyingGlass,HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

export type ItemType = {
    name: string, icon: React.ReactNode;
}
//do i need the second header 

//const [toggle, setToggle] = useState(false)

const Header = () => {
    const menu = [
        {
            icon: <HiHome/>,   //treat react icons as components 
            name: 'Home',
        },
        {
            name: 'SEARCH',
            icon: <HiMagnifyingGlass/>
        },
        {
            name: 'WATCH LIST',
            icon: <HiPlus/>
        },
        {
            name: 'ORIGINALS',
            icon: <HiStar/>
        },
        {
            name: 'MOVIES',
            icon: <HiPlayCircle/>
        },
        {
            name: 'SERIES',
            icon: <HiTv/>
        }
        
    ]
    return(
        <div className = 'flex items-center justify-between p-5'>
            <div className = 'flex gap-8 items-center'>
                <img src={logo} alt="logo" className = 'w-[200px] md:w-[215px] lg:[240px] object-cover'/>
                <div className=' flex gap-8'>
                    {menu.map((item, index) =>(
                        <HeaderItem key={index} name={item.name} icon={item.icon}/>
                    ))}
                </div>
    
            <div className = 'flex md:hidden gap-5 '>
                {menu.map((item, index) => index<3&&(
                    <HeaderItem key={index} name={""} icon={item.icon}/>
                ))}
            </div>
            </div>
        <img src={user} className='w-[40px] rounded-full ml-auto' />
        </div>
    )
}
export default Header