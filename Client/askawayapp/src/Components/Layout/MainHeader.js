import React from "react";
import { Link } from "react-router-dom";

//Components
// import ProfileSideBar from "../ProfileSideBar";

//Icons
// import { IoPersonCircle } from "react-icons/io5";

export default function MainHeader() {
    // const openProfile = () => {
    //     document.getElementById("profileSideBar").style.transform = "translate(0, 0)";
    //     document.getElementById("profileSideBar").style.boxShadow = "0 0 20px 5px rgba(0,0,0,0.1), 0 0 100px 20px rgba(0,0,0,0.2)";
    //     // document.getElementById("profileSideBarBackdrop").style.opacity = "0";
    //     document.getElementById("profileSideBarBackdrop").style.display = "block";
    // };

    return (
        <>
            <header
                id="header"
                className="bg-white p-1"
                style={{ height: 58, position: "fixed", top: 0, left: 0, right: 0, boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.1)", zIndex: 100, color: "#555" }}
            >
                {/* <IoPersonCircle style={{ fontSize: 35, position: "absolute", top: "50%", transform: "translate(10px, -50%)" }} onClick={openProfile} /> */}
                <Link to="/" className="text-decoration-none">
                    <h1 className="text-center" style={{ fontSize: 35 }}>
                        AskAway
                    </h1>
                </Link>
            </header>
            {/* <ProfileSideBar /> */}
        </>
    );
}
