import React from 'react'
import "./Header.css"

function Header({ components, props, state, lists }) {
    return (
        <header className="header">
            <h1>Student Course App</h1>
            <p>Learn React by exploring {components}, {props}, {state}, and {lists}</p>
        </header>
    )
}

export default Header