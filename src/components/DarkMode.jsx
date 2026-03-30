import React, { useState } from "react";

function DarkMode() {
    const [IsDark, setIsDark] = useState(true)

    function handleClick() {
        if (!IsDark) {
            setIsDark(true);
        }
        else {
            setIsDark(false);
        }
    }
    return (
        <div style={{
            textAlign: 'center', padding: '67px', margin: '54px',
            background: IsDark ? "white" : "black"
        }} >
            <button
                onClick={handleClick}
            >

                Dark
            </button>


        </div>
    )
}

export default DarkMode;