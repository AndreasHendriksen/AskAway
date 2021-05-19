import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function RoomCodeInputModal() {
    const [roomCode, setRoomCode] = useState();

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push("/room/" + roomCode);
    };

    return (
        <>
            <div className="modal fade" id="roomCodeInputModal" data-keyboard="true" tabindex="-1" aria-labelledby="roomCodeInputModalLabel" aria-hidden="true">
                <section className="modal-dialog" style={{ bottom: "0 !important" }}>
                    <div className="modal-content">
                        <form className="modal-body">
                            <input type="text" id="roomCodeInput" className="form-control mb-2" aria-describedby="emailHelp" placeholder="Room Code" />
                            <input
                                type="submit"
                                className="btn btn-secondary w-100"
                                value="Enter"
                                data-bs-toggle="modal"
                                data-bs-target="#roomOptionsModal"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setRoomCode(document.getElementById("roomCodeInput").value);
                                }}
                            />
                        </form>
                    </div>
                </section>
            </div>
            <div className="modal fade" id="roomOptionsModal" data-keyboard="true" tabindex="-1" aria-hidden="true">
                <section className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="roomOptionsModalLabel">
                                h120lang Medie
                            </h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="modal-body">
                            <div className="row">
                                <p className="col-12 mb-1">Teacher: Miss Somin'</p>
                                <p className="col-6 m-0">Students: 7</p>
                                <p className="col-6 m-0 ">Questions: 12</p>
                                <p className="col-12 m-0 pt-3 ">Enter as:</p>
                                <div className="col-12 mb-3">
                                    <input type="text" className="form-control" placeholder="Nicknames disabled" disabled />
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#roomCodeInputModal" data-bs-dismiss="modal">
                                        Back
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-primary w-100" data-bs-dismiss="modal" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
