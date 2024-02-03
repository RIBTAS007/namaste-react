import React, { useEffect, useRef, useState } from 'react'

const DemoUseRef = () => {
    const [y, sety] = useState(0);
    let x =10;
    const ref = useRef(0);
    console.log("rndering...");
    
    const i = useRef(null);
    useEffect(()=>{
        i.current = setInterval(()=>{
            console.log("Namaste react", Math.random());
        },1000);

        return () => clearInterval(i.current);
    }, []);
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96 '>
       <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick = {()=> {x=x+1; console.log("x="+x);}}
        >
          increase x
        </button>
        <span className='font-bold text-xl'>Let = {x}</span>
        </div>
        <div >
        <button
          className='bg-green-100 p-2 m-4'
          onClick = {()=> {sety(y+1); console.log("y="+y);}}
        >
          increase y
        </button>
        
        <span className='font-bold text-xl'>Y = {y}</span>
       </div>
       <div >
        <button
          className='bg-green-100 p-2 m-4'
          onClick = {()=> {ref.current = ref.current +1; console.log("ref="+ref.current);}}
        >
          increase ref
        </button>
        
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
       </div>
       <button className='bg-red-900 p-4 m-4 text-white font-bold rounded-lg'
       onClick={()=>{
        clearInterval(i.current);
       }}
       >Stop printing</button>
    </div>
  )
}

export default DemoUseRef