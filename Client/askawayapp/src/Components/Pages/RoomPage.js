import React, { useState, useEffect } from "react";

//  Components
import QuestionBox from "../QuestionBox";

export default function RoomPage(props) {
    let { id } = props.match.params;

    //Defining a list of questions. Debug only.
    const [questions, setQuestions] = useState([
        {
            id: 1,
            sender: "Michael",
            title: "Hvorfor det?",
            answered: false
        },
        {
            id: 2,
            sender: "Jonas",
            title: "Hvem er det?",
            answered: false
        },
        {
            id: 3,
            sender: "Emma",
            title: "My namea Jeff?",
            answered: false
        },
        {
            id: 4,
            sender: "Josha",
            title: "Hvem er Jeff?",
            answered: false
        },
        {
            id: 5,
            sender: "Mette",
            title: "Hvad foregår der?",
            answered: true
        },
        {
            id: 6,
            sender: "Jim",
            title: "Hvem er det?",
            answered: true
        },
    ]);

    return (
        <>
            {/* Map out the room's questions in individual boxes */}
            {questions.map((item, index) => (
                <QuestionBox index={index} item={item}  />
            ))}
        </>
    );
}
