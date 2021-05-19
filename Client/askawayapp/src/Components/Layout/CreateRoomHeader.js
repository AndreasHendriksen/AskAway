import React from "react";
import { Link } from "react-router-dom";

//Icons
import { IoPersonCircle } from "react-icons/io5";

export default function CreateRoomHeader() {
    return (
        <header id="header" className="bg-white p-1 container-fluid" style={{ height: 58, position: "fixed", top: 0, left: 0, right: 0, boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.1)", zIndex: 100 }}>
            <div className="row">
                <Link className="col-2 text-decoration-none" to="/" >Cancel</Link >
                <h1 className="col-8 text-center mt-2" style={{ fontSize:"35", color:"#555" }} >Create Room</h1 >
                <Link className="col-2 text-decoration-none text-end" to="#" >Save</Link >
            </div>
        </header>
    );
}
