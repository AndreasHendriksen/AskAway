import React from "react";
import { Link } from "react-router-dom";

//Icons
import { IoPersonCircle } from "react-icons/io5";

export default function MainHeader() {
    return (
        <header id="header" className="bg-white p-1" style={{ height:58, position: "fixed", top:0, left:0, right:0, boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.1)", zIndex:100 }}>
            <IoPersonCircle style={{ fontSize: 35, position: "absolute", top: "50%", transform: "translate(10px, -50%)" }} />
            <Link to="/">
                <h1 className="text-center" style={{ fontSize: 35 }}>
                    AskAway
                </h1>
            </Link>
        </header>
    );
}
