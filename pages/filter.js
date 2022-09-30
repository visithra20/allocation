import React, { useState } from 'react'
const Filter = () => {
    const Fruits=["apple","banana","mango","orange","apple"]
    console.length(Fruits)
    const [value,setValue]=useState(0);
    const [valmap,setValmap]=useState()
    const handleClick=(event)=>{
        setValmap((oldData)=>[...oldData,data])
        setValue();
        event.preventDefault()
    }

  return (
    <div>
        <p>{Fruits}</p>
     <p>{Fruits.sort()}</p>
     {/* <p>count({Fruits})</p> */}
     <p>{Fruits.reverse()}</p>
     <p>{Fruits}</p>
     <p>{Fruits.push("Kiwi", "Lemon")}</p>
   
     <button value={value} onClick={()=>(setValue(value+1))}>add</button>
     {value}
     <p>
     <button value={value} onClick={()=>(setValue(value/5))}>divi</button>
     {value}</p>
     <p>
     <button value={value} onClick={()=>(setValue(value*3))}>multi</button>
     {value}</p>
     {/* <input type='submit' onClick={handleClick} />
     {valmap.map((data)=> <div> {data} </div>)} */}
    </div>
  )
}

export default Filter