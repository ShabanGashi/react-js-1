import React, { useState } from "react";

function OnChange() {
    const [text, setText] = useState("");
    function handleChange(event) {
        setText(event.target.value);
    } 
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{text}</p>
        </div>
    )
}

export default OnChange;