import React from "react";

//Icons
import { FaCog } from "react-icons/fa";
import { BiX } from "react-icons/bi";

export default function ProfileSideBar() {
    const handleExit = () => {
        document.getElementById("profileSideBar").style.transform = "translate(-100%, 0)";
        document.getElementById("profileSideBar").style.boxShadow = "0 0 20px 5px rgba(0,0,0,0), -100px 0 100px 20px rgba(0,0,0,0.2)";
        // document.getElementById("profileSideBarBackdrop").style.opacity = "0";
        document.getElementById("profileSideBarBackdrop").style.display = "none";
    };

    return (
        <>
            <div id="profileSideBarBackdrop" style={backdropStyle} onClick={handleExit} />
            <section id="profileSideBar" className="container-fluid" style={sidebarStyle}>
                <div className="row">
                    <header className="col-12 bg-white p-3 mb-4" style={{ position: "relative", color: "#555", boxShadow: "0 -6px 20px 0px rgba(0,0,0,0.5)", height: "58px" }}>
                        {/* <FaCog style={{ fontSize: 25, position: "absolute", top: "50%", left: "0", transform: "translate(17px, -50%)" }} /> */}
                        <h2 className="text-center m-0">Profile</h2>
                        <BiX style={{ fontSize: 35, position: "absolute", top: "50%", right: "0", transform: "translate(-17px, -50%)" }} onClick={handleExit} />
                    </header>
                    <div className="col-6  text-end">
                        <button className="btn btn-primary w-75">Log in</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success w-75">Sign up</button>
                    </div>
                    <section className="col-12 p-3">

                    </section>
                </div>
            </section>
        </>
    );
}

const backdropStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "999",
    transition: "0.4s",
    opacity: "1",
    display: "none",
};

const sidebarStyle = {
    position: "fixed",
    width: "80%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    zIndex: "999",
    transition: "0.4s",
    boxShadow: "0 0 20px 5px rgba(0,0,0,0), -100px 0 100px 20px rgba(0,0,0,0.2)",
    overflow: "hidden",
    transform: "translate(-110%, 0)",
};
