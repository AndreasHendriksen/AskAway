import React from "react";

//Icons
import { BsThreeDotsVertical } from "react-icons/bs";

export default function RoomHeader() {
    return (
        <header id="header" className="bg-white p-1" style={{ height: 58, position: "fixed", top: 0, left: 0, right: 0, boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.1)", zIndex: 100 }}>
            <h1 className="text-center mt-1" style={{ fontSize: 30 }}>
                Room Title
            </h1>
            <p class="" data-bs-toggle="modal" data-bs-target="#roomSettingsModal">
                <BsThreeDotsVertical style={{ fontSize: 30, position: "absolute", top: "50%", right: 18, transform: "translate(10px, -50%)" }} />
            </p>
        </header>
    );
}
