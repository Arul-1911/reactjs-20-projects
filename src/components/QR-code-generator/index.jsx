import { useState } from 'react';
import './style.css';
import QRCode from 'react-qr-code'

export default function Generator(){

   const [qrcode,setQrcode] = useState('');
   const [input,setInput] = useState('');

   function handleClick(){
      setQrcode(input);
      setInput('')
   }


   return(
      <div className='container'>
      <h1>QR Code Generator</h1>
      <div className='input-container'>
         <input type="text" placeholder='Enter your text...' onChange={(e) => setInput(e.target.value)} value={input}/>
         <button onClick={handleClick} disabled={input && input.trim() !== '' ? false : true}>Generate</button>
      </div>
      <div className='qr-code'>
         <QRCode value={qrcode} size={350}/>
      </div>
      </div>
   )
}