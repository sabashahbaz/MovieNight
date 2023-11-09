import logo from '../assets/images/logo.png'
import {HiHome, HiMagnifyingGlass,HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

export type ItemType = {
    name: string, icon: React.ReactNode;
}

const Header = () => {
    const menu = [
        {
            icon: <HiHome/>,   //treat react icons as components 
            name: 'HOME',
            
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
        <div className = 'flex items-center gap-8'>
            <img src={logo} alt="logo" className = 'w-[200px] md:w-[215px] lg:[240px] object-cover'/>
            {menu.map((item, index) => (
                <HeaderItem key={index} name={item.name} icon={item.icon}/>
            ))}
        </div>
    )
}
export default Header