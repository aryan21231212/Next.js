import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"blue ",padding:"5px",color:"white"}}>
      <h1>Aryan</h1>
      <div style={{display:"flex", gap:"8px"}}>
        <Link style={{textDecoration:"none",fontSize:"1.2rem",color:"whitesmoke"}} href={"/"}>Home</Link>
        <Link style={{textDecoration:"none",fontSize:"1.2rem",color:"whitesmoke"}} href={"/about"}>About</Link>
        <Link style={{textDecoration:"none",fontSize:"1.2rem",color:"whitesmoke"}} href={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar