import React ,{useState} from 'react'

const Toggel = () => {
const [togle,setTogle]=useState("block")
 const toglebtn=() =>{
   if(togle==="block")
   {setTogle("none")}
   else{setTogle("block")}
 }
  return (
    <div className='main_top'>
        <div className="btn">
            <button className='btn' onClick={toglebtn}>ON/OFF</button>
        </div>
        <div className="main" style={{display:`${togle}`}}  >
            <div className="title">Harish</div>
            <div className="Name">JACKY</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusantium. Libero, ullam amet? Dolorem quod commodi eos, repellat illo saepe?</p>
        </div>
    </div>
  )
}

export default Toggel