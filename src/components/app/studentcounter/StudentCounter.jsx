import { useState } from "react";
import "./Counter.css";

 function Counter() {
    const [count, setCount] = useState(1);

    return (
        <div className="card counter">
            <h2>Student Counter</h2>
            <p>Use useState to track how many students are enrolled.</p>

            <div className="circle">{count}</div>

            <div className="buttons">
                <button className="btn green" onClick={() => setCount(count + 1)}>
                    + Increase
                </button>
                <button className="btn red" onClick={() => setCount(count - 1)}>
                    - Decrease
                </button>
                <button className="btn gray" onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;