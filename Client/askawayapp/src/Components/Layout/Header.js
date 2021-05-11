import React from 'react'

//Icons
import { IoPersonCircle } from "react-icons/io5";

export default function Header() {
    return (
        <header className="bg-white p-1" style={{position:"relative", boxShadow:"0px 0px 15px 2px rgba(0,0,0,0.1)"}} >
            <IoPersonCircle style={{fontSize:35, position:"absolute", top:"50%", transform:"translate(10px, -50%)"}} />
            <h1 className="text-center" style={{fontSize:35}} >AskAway</h1>
        </header>
    )
}
