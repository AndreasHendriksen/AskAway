import React from "react";
import $ from 'jquery'; 

export function RoomCodeInputModal() {
    return (
        <div className="modal fade" id="RoomCodeInputModal" data-keyboard="true" tabindex="-1" aria-labelledby="RoomCodeInputModalLabel" aria-hidden="true">
            <section className="modal-dialog" style={{ bottom: "0 !important" }}>
                <div className="modal-content">
                    <div className="modal-body">
                        <input type="text" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Room Code" />
                        <button type="button" className="btn btn-secondary w-100" data-dismiss="modal"  >
                            Enter
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export function RoomOptionsModal() {
    return (
        <div className="modal fade" id="RoomOptionsModal" data-keyboard="true" tabindex="-1" aria-hidden="true">
            <section className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body"></div>
                </div>
            </section>
        </div>
    );
}
