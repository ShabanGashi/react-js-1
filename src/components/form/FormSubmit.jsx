import React, { useState } from 'react'

function FormSubmit() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (name.trim() === "") {
            setError("Name IS required")
            return
        }
        if (name.length < 2) {
            setError("Name IS short")
            return
        }

        if (password.length < 4) {
            setError("Sbon kshtu bablok")
            return
        }
        if (!password.includes("$")) {
            setError("it must include $")
            return
        }
        if (password[0] !== password[0].toUpperCase()) {
            setError("password uppercase")
            return;
        }
        setError("");
        console.log(name, surname);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                />
                <input type="text"
                    value={surname}
                    onChange={(event) => { setSurname(event.target.value) }}
                />

                <hr />

                <input type="password"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />

                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}

export default FormSubmit;