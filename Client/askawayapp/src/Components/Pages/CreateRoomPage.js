import React from "react";

export default function CreateRoomPage() {
    return (
        <form className="p-3">
            <div className="mb-2">
                <label for="roomTitleInput" className="form-label mb-1">
                    Title
                </label>
                <input type="text" className="form-control" id="roomTitleInput" aria-describedby="titleHelp" placeholder="Enter title" />
            </div>
            <div className="mb-2">
                <label for="roomDescriptionInput" className="form-label mb-1">
                    Description
                </label>
                <input type="text" className="form-control" id="roomDescriptionInput" aria-describedby="discriptionHelp" placeholder="Enter description" />
            </div>
            <div className="mb-4">
                <label for="roomTeacherInput" className="form-label mb-1">
                    Teacher Name
                </label>
                <input type="text" className="form-control" id="roomTeacherInput" aria-describedby="teacherHelp" placeholder="Enter name" />
            </div>
            <div className="mb-3">
                <label for="roomDescriptionInput" className="form-label mb-1" >
                    Allow annonymous students
                </label>
                <input type="checkbox" className="form-check-input float-end" id="exampleCheck1" />
            </div>
            <div className="mb-3">
                <label for="roomDescriptionInput" className="form-label mb-1" >
                    Allow student nicknames
                </label>
                <input type="checkbox" className="form-check-input float-end" id="exampleCheck1" />
            </div>
            <div className="mb-3">
                <label for="roomDescriptionInput" className="form-label mb-1" >
                    Questions per minute limit
                </label>
                <input type="text" className="float-end form-control" style={{width:60}} id="exampleCheck1" />
                <div id="emailHelp" class="form-text">Leave at 0 for no limit</div>
            </div>
        </form>
    );
}
