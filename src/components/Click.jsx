import React, { useState } from "react";

function Click() {
    const [message, setMessage] = useState("nothing yet");
    function seeAllMessage() {
        setMessage("here isthe full message")
    }
    return (
        <div>
            <button onClick={seeAllMessage}>SEE {message}</button>
        </div>
    )
}

export default Click