import React from "react";

export default function InputBox() {
    return (
        <form className="p-2" style={{ position: "fixed", left: 0, right: 0, bottom: 0, marginBottom: 48, zIndex: 11 }}>
            <div className="container-fluid bg-white p-3" style={{ border: "1px solid #666", borderRadius: 6, boxShadow: "0px 10px 20px 10px rgba(0,0,0,0.2)" }}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your question" />
                </div>
                <div className="row pt-2">
                    <div className="col-8 ">
                        <input type="checkbox" className="me-2" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Ask as annonymus
                        </label>
                    </div>

                    <div className="col-4  text-end">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
