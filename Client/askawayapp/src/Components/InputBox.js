import React from "react";

export default function InputBox() {
    return (
        <form className="p-2" style={{position:"fixed", left:0, right:0, bottom:0, marginBottom:48, zIndex:11 }}>
            <div className="container-fluid bg-white p-3" style={{border:"1px solid #666", borderRadius:6, boxShadow:"0px 10px 20px 10px rgba(0,0,0,0.2)" }}>
                <div className="form-group">
                    {/* <label for="exampleInputEmail1">Question</label> */}
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your question" />
                    {/* <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                </small> */}
                </div>
                <div className="row">
                    <div className="col-8 display-inline">
                        <input type="checkbox" className="mr-2" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Ask as annonymus
                        </label>
                    </div>

                    <div className="col-4 display-inline text-right">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
