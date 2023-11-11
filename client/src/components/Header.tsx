import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'
import {HiHome, HiMagnifyingGlass,HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

export type ItemType = {
    name: string, icon: React.ReactNode;
}
//do i need the second header 
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
            <div className = 'hidden md:flex gap-8 items-center'>
                <img src={logo} alt="logo" className = 'w-[200px] md:w-[215px] lg:[240px] object-cover'/>
                {menu.map((item, index) => (
                    <HeaderItem key={index} name={item.name} icon={item.icon}/>
                ))}
            </div>
            <div className = 'flex md:hidden gap-8 items-center'>
                <img src={logo} alt="logo" className = 'w-[200px] md:w-[215px] lg:[240px] object-cover'/>
                {menu.map((item, index) => (
                    <HeaderItem key={index} name={item.name} icon={item.icon}/>
                ))}
            </div>
            <img  src={user} className='w-[50px] rounded-full gap-6 p-1 mr-2 mt-1 ml-auto'/>
        </div>
    )
}
export default Header