import React , {useState,useEffect} from 'react';
import './App.css';
import Header from "./Layouts/Header"
import CategoryPills from './components/CategoryPills';
import {categories, videos} from "./data/data"
import VideoGridItem from './components/VideoGridItem';
import  Button  from './components/Button';
import SideBar from './Layouts/SideBar';
function App() {
  const [selectCateg, setSelectCateg] = useState(categories[0])
  useEffect(() => { 
  }, [selectCateg])
  
  return (
    <div className="App">
       <Header/>
       <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
       <SideBar/>
        <div className="overflow-x-hidden px-6 pb-4"> 
            <div className="sticky top-0 z-10 pb-4">
        <CategoryPills categories={categories} selectedCategory={selectCateg} onSelect={setSelectCateg}/>
        </div> 
        <div className="flex flex-wrap gap-4">
          {videos.map(video => (
            <div key={video.id} className="flex-auto w-[300px]  ">
             <VideoGridItem {...video}/>
           </div>
  ))}
</div>
        </div>
       </div>
     
     
    </div>
  );
}

export default App;
