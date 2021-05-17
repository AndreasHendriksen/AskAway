import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

//  Icons
import { AiFillHome } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { HiLockOpen } from "react-icons/hi";

export default function MainFooter() {
    return (
        <footer className="bg-white p-4" style={{ height: 48, position: "fixed", bottom: 0, left: 0, right: 0, boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.1)", zIndex: 100 }}>
            <AiFillHome style={{ fontSize: 35, position: "absolute", top: "50%", left: (window.innerWidth - 55) / 4, transform: "translate(-50%, -50%)" }} />

            <div className="bg-white" style={{ width: 55, height: 55, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -85%)", borderRadius: 8 }} />
            <FiPlusSquare style={{ fontSize: 55, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -85%)" }} data-bs-toggle="modal" data-bs-target="#roomCodeInputModal" />

            <HiLockOpen style={{ fontSize: 35, position: "absolute", top: "50%", right: (window.innerWidth - 55) / 4, transform: "translate(50%, -50%)" }} />
        </footer>
    );
}
