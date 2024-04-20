import { useEffect, useState } from "react"

export  default function RandomColor(){

   const [typeofcolor, setTypeofcolor] = useState('hex');
   const [color,setColor] = useState('#000000');

   const randomColorUtility = (length) => {
    return  Math.floor(Math.random()*length)
   }

   const handleHexColor = () => {
      const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
      let hexVal = '#'
     for(let i=0; i <6; i++){
       hexVal += hex[randomColorUtility(hex.length)];
     }
      // console.log(hexVal)
      setColor(hexVal)
   }

   const handleRbgcolor = () => {
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)

      setColor(`rgb(${r},${g},${b})`)
   }

   useEffect(() => {
      if(typeofcolor === 'rgb') handleRbgcolor();
      else handleHexColor();
   }, [typeofcolor])

   return (
     <>
       <div
         className="container"
         style={{
           width: "100%",
           height: "98vh",
           background: color,
           overflow:"hidden",
           flexWrap:"wrap"
         }}
       >
         <div className="btns" style={{
            display:"flex",
            flexDirection:'row',
            justifyContent:"center",
            marginTop:'20px',
         }}>
           <button onClick={() => setTypeofcolor("hex")}>
             Create HEX Color
           </button>
           <button onClick={() => setTypeofcolor("rgb")}>
             Create RGB Color
           </button>
           <button
             onClick={typeofcolor === "hex" ? handleHexColor : handleRbgcolor}
           >
             Generate Random Color
           </button>
         </div>
         <div
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             color: "white",
             fontSize: "60px",
             marginTop: "40px",
             flexDirection: "column",
             gap: "25px",
           }}
         >
           <h4>{typeofcolor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h4>
           <h3>{color}</h3>
         </div>
       </div>
     </>
   );
}