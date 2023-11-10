import React from 'react'

interface HeaderItemProps  {
  name: string;
  icon: React.ReactNode;
};


const HeaderItem = ({name, icon}: HeaderItemProps) => {
  return (
    <div className = 'text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer ' >
      <div>{icon}</div>
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem