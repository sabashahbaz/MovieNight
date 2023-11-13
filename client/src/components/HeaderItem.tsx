import React from 'react'

interface HeaderItemProps  {
  name: string;
  icon: React.ReactNode;
};


const HeaderItem = ({name, icon}: HeaderItemProps) => {
  return (
    <div className = 'text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 ' >
      <div className=''>{icon}</div>
      <h2 className ='hidden md:flex sm:hidden items-center'>{name}</h2>
    </div>
  )
}

export default HeaderItem