import React,{useState,useEffect} from 'react'
import './Navbar.css';


function Navbar() {
    const [show,handleShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>500?handleShow(true):handleShow(false)
        })
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && "black"}`}>
        <img className='logo' src='https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png'></img>
    </div>
  )
}

export default Navbar