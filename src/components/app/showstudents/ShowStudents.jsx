import React, { useState } from 'react'
import "./ShowStudents.css"


function ShowStudents() {
    const [students, setStudents] = useState([
        {
            id: 1,
            firstname: "Shaban",
            age: "16"
        },
        {
            id: 2,
            firstname: "Edonisa",
            age: "16"

        },
        {
            id: 3,
            firstname: "Arsimi",
            age: "16"

        },
    ]);
    const [showStudents, setShowStudents] = useState(false);


    return (
        <div>
            <h1>Enrolled Students</h1>
            <p>Click The Button To Show Or Hide Something</p>
            <button onClick={() => setShowStudents(!showStudents)}
            >{showStudents ? "Show Student" : "Hide Students"}</button>
            {showStudents &&
                students.map(s => (
                    <p key={s.id}>{s.firstname} — {s.age}</p>
                ))
            }
        </div>
    )
}

export default ShowStudents