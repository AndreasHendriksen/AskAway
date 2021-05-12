import React from "react";
import { Link } from "react-router-dom";

export default function OptionsModal() {
    return (
        <section className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Settings
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <label className="col-10" for="option1">When your question is anwsered</label>
                            <input type="checkbox" className="col-2" id="option1" />
                            <label className="col-10 py-1" for="option2">When a new question is posted</label>
                            <input type="checkbox" className="col-2" id="option2" />
                            <label className="col-10" for="option3">When a question is anwsered</label>
                            <input type="checkbox" className="col-2" id="option3" />
                        </div>
                    </div>
                    <div className="modal-footer text-left">
                        <button type="button" className="btn btn-danger mr-auto" data-dismiss="modal">
                            Exit Room
                        </button>

                        <small id="emailHelp" className="form-text text-muted">
                            Settings are saved automatically
                        </small>
                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Understood
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
