import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import React, { ElementType } from 'react'
import { buttonStyles } from '../components/Button';
type SmallSiderItemProps={
    Icon: ElementType;
    title:string
    url:string
    direction:string
}
export default function SideBar() {
  return (
    <>
   <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
    <SmallSiderBarItem Icon={Home} direction='col' title="Home" url='/' />
    <SmallSiderBarItem Icon={Repeat} direction='col' title="Shorts" url='/' />
    <SmallSiderBarItem Icon={Clapperboard} direction='col' title="Subscriptions" url='/' />
    <SmallSiderBarItem Icon={Library} direction='col' title="Library" url='/' />
    <hr />
   
   </aside>
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 hidden lg:block">
    <SmallSiderBarItem Icon={Home} title="Home" url='/' direction='row' />
    <SmallSiderBarItem Icon={Repeat} title="Shorts" url='/' direction='row' />
    <SmallSiderBarItem Icon={Clapperboard} title="Subscriptions"direction='row' url='/' />
    <SmallSiderBarItem Icon={Library} title="Library" url='/'direction='row' />
    <hr />
   
   </aside>
   </>
  )
}
const SmallSiderBarItem =({Icon,title,url,direction}: SmallSiderItemProps)=>{
    return(
        <a className={`py-4 px-1 flex flex-${direction} items-center rounded-lg gap-1`} href={url}>
            <Icon className="w-6 h-6" />
            <span className='text-sm'>{title}</span>
        </a>
        
    ) 
}
