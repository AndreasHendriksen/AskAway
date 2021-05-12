import React from 'react'

export default function QuestionBox({index, item}) {
    const {id, title, sender, answered} = item;

    return (
        <section className="px-3 py-2 position-relative" style={{borderBottom:"1px solid grey", backgroundColor:"#fff", zIndex:10}}>
            <p className="d-inline m-0">{title}</p>
            <p className="float-right" style={{}} >{sender}</p>
            <hr className="mx-2 my-0" style={{position:"absolute", top:"50%", left:0, right:0, borderTop:"1px solid black"}} />
        </section>
    )
}
