import React , {useEffect, useRef, useState} from 'react'
type VideoGridItem={
    id: string,
    title:string,
    channel:{
        id:string,
        name:string,
        profileUrl:string
    }
    views:number
    duration:number
    postedAt:Date 
    videoUrl:string 
    thumbnailUrl:string
}
export default function VideoGridItem({id,title,channel,views,postedAt,duration,thumbnailUrl,videoUrl}:VideoGridItem ) {
    function formatNumber(num : number) {
        if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toString();
      }
 const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef <HTMLVideoElement>(null)

  useEffect(() => {

    
  if(videoRef.current== null) return;
  if(isVideoPlaying){
    videoRef.current.currentTime=0
    videoRef.current.play()
  }else{
    videoRef.current.pause()
  }
   
  }, [isVideoPlaying])
  
  return (
   <div className="flex flex-col gap-2" onMouseEnter={()=> setIsVideoPlaying(true)} onMouseLeave={()=> setIsVideoPlaying(false)}>
    <a href={`/watch?v=${id}`} className="relative aspect-video">

        <img src={thumbnailUrl} className='block w-full h-full object-cover rounded-xl' alt="" />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
            {duration}
        </div>
    <video className={`block h-full object-cover absolute inset-0 transition-opacity  ${isVideoPlaying? "opacity-100": "opacity-0"}`} src={videoUrl} muted ref={videoRef} playsInline></video>
    </a>
    <div className="flex gap-2">
        <a href="" className="flex"><img src={channel.profileUrl} alt="" className="w-12 h-12 rounded-full" /></a>
        <div className='block'>
            <a href="" className="font-bold">
                {title}
            </a> <br />
            <a href="" className="text-sm text-secondary-text">
                {channel.name}
            </a><br />
            <span className="text-sm"> {formatNumber(views)} views</span>
        </div>
    </div>

   </div>
  )
}
