import React, { useState } from "react";

function UseStateComponent() {
    const [count, setCount] = useState(0);
    const [isOn, setisOn] = useState(true);
    const [countDisable, setcountDisable] = useState(0)
    return (
        <div>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>minus</button>
            <button onClick={() => setCount(0)}>RESET</button>



            <p style={{ color: count > 10 ? "red" : "black" }}>{count}</p>
            <button onClick={() => setisOn(!isOn)}>
                {isOn ? "ON" : "OFF"}
            </button>
            {
                isOn && <p>hide</p>
            }
            {
                count > 10 && <p>max</p>
            }

            <button onClick={() => setcountDisable(countDisable + 1)} disabled={countDisable > 10}>test</button>
            <p style={{ color: countDisable > 10 ? "red" : "black" }}>{countDisable}</p>

            {
                countDisable > 10 && <p>max</p>
            }
        </div >
    )
}

export default UseStateComponent;