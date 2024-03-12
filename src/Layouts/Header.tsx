import React from 'react'
import logo from "../Assets/youtube-logo.png"
import {Bell, Menu,Mic,Search,Upload, User} from "lucide-react"
import  Button  from '../components/Button'
export default function Header() {
    const [showFullWidthSearch, setShowFullWidthSearch] = React.useState(false)
  return (
    <div className="flex  lg:gap-20 py-2 justify-between">
        <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`} >
            <Button size="icon" variant="ghost">
            <Menu />
            </Button>
            <img src={logo} height={50} width={120} alt="" />
        </div>
        <div>
<form action="" className={` gap-4 flex-grow ${showFullWidthSearch ? "flex justify-content mx-auto" : "hidden md:flex"}`}>
    <div className="flex flex-grow max-w-[600px]">
    <input type="search" placeholder='Search' className='outline-none focus:border-blue-500 rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full' />
    <Button className='flex-shrink-0 border-1-0 rounded-r-full border border-secondary-border'   variant="ghost">
    <Search />
    </Button>
    </div>
    <Button size="icon"  variant="ghost">
    <Mic />
    </Button>
</form>
        </div>
        <div className={`flex gap-2 flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={()=>setShowFullWidthSearch(true)} className='md:hidden'  size="icon" variant="ghost">
    <Search />
    </Button>
    <Button className='md:hidden'  size="icon" variant="ghost">
    <Mic />
    </Button>
        <Button  size="icon" variant="ghost">
        <Upload />

     </Button>
     <Button size="icon" variant="ghost">
        <Bell />

     </Button>
     <Button size="icon" variant="ghost">
        <User />

     </Button>
        </div>
    </div>
    
  )
}
