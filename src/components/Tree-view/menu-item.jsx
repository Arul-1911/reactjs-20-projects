import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa';


export default function MenuItem({item}){

   const [currentChildren,setCurremtChildren] = useState({})

   const handleToggleChildren = (currentLevel) => {
      setCurremtChildren({
         ...currentChildren,
         [currentLevel]: !currentChildren[currentLevel]
      })
   }
   return (
     <li>
       <div className="menu-item-container">
         <p>{item.label}</p>
         {item && item.children && item.children.length > 0 ? (
           <span onClick={() => handleToggleChildren(item.label)}>
             {currentChildren[item.label] ? (
               <FaMinus color="white" size={25} />
             ) : (
               <FaPlus color="white" size={25} />
             )}
           </span>
         ) : null}
       </div>
       {item &&
       item.children &&
       item.children.length > 0 &&
       currentChildren[item.label] ? (
         <MenuList list={item.children} />
       ) : null}
     </li>
   );
}