import React from 'react'

export default function RoomPage(props) {

    let {id} = props.match.params;

    return (
        <div>
            RoomPage {id}
        </div>
    )
}
