import React from 'react'

export default function QuestionBox({index, item}) {
    const {id, title, sender, answered} = item;

    return (
        <section className={`px-3 py-2 position-relative ${answered === true ? "text-secondary" : ""}`} style={{borderBottom:"1px solid grey", backgroundColor:"#fff", zIndex:10}}>
            <p className="d-inline m-0 mr-2">{id}</p>
            <p className="d-inline m-0">{title}</p>
            <p className="float-right" style={{}} >{sender}</p>
            <hr className={`mx-2 my-0 ${answered === true ? "" : "d-none"}`} style={{position:"absolute", top:"50%", left:0, right:0, borderTop:"1px solid #666"}} />
        </section>
    )
}
