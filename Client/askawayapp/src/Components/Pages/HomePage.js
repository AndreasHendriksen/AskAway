import React from "react";

export default function HomePage() {
    return (
        <div className="text-center" style={{position:"absolute", right:"0", bottom:"90px", left:"0"}} >
            <button className="btn btn-primary w-75  mb-2" style={{boxShadow:"0 4px 9px 2px rgba(0,0,0,0.4)"}} >Log in</button>
            <button className="btn btn-success w-75" style={{boxShadow:"0 4px 9px 2px rgba(0,0,0,0.4)"}} >Sign up</button>
        </div>
    );
}
