import { useEffect, useState } from 'react';
import './tabs.css';

export default function Tabs({tabsContent}){

   const initialIndex = parseInt(localStorage.getItem('currentTabIndex')) || 0;
   const [currentTabIndex, setCurrentTabIndex] = useState(initialIndex);

   useEffect(() => {
      localStorage.setItem('currentTabIndex', currentTabIndex)
   },[currentTabIndex])

   function handleOnClick(getCurrentIndex){
      setCurrentTabIndex(getCurrentIndex)
   }

   return(
      <div className='wrapper'>
         <div className="heading">
      {
         tabsContent.map((tabItem, index) => (
            <div key={tabItem.label} onClick={() => handleOnClick(index)} className={`tab-item ${currentTabIndex === index ? 'active':''}`}>
               <span className='label'>{tabItem.label}</span>
            </div>
         ))
      }
         </div>
         <div className="content">
         {
            tabsContent[currentTabIndex]?.content
         }
         </div>
      </div>
   )
}