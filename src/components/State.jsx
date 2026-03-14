import React, { useState } from "react"

function State() {
    //state type number
    const [count, setCount] = useState(0)

    //state type string
    const [name, setName] = useState("cr7");

    //state type boolean ture or flase
    const [show, setShow] = useState(true)

    //state tyPe array with object
    const [users, setUsers] = useState(
        [
            {
                id: 1, firstName: "Egzon", role: "student"
            },
            {
                id: 2, firstName: "Ezon", role: "stuent"
            },
            {
                id: 3, firstName: "Egzn", role: "stent"
            },
            {
                id: 4, firstName: "Egn", role: "sent"
            },
        ]
    )

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                increase
            </button>
            <h1>{count}</h1>
            <div>
                <input type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <h1>{name}</h1>
            </div>
            <div>
                {show && <button>KOSOVA</button> && <p>MESSI</p>}
            </div>
            <div>
                {console.log(users)}
                {users.map(user => (
                    <p key={user.id}>{user.firstName} {user.role}</p>
                ))}
            </div>
        </div>

    )
}

export default State