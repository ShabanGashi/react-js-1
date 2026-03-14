import React, { useEffect, useState } from "react";

function UseEffect() {
    const [workers, setWorkers] = useState([
        {
            id: 1,
            firstname: "Shaban",
            role: "Worker",
        },
        {
            id: 2,
            firstname: "Shab",
            role: "Worker",
        },
        {
            id: 3,
            firstname: "Ban",
            role: "Worker",
        },
    ]);

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("Clicked", count);
    }, [count]);

    useEffect(() => {
        console.log("Workers list:", workers);
    }, [workers]);

    return (
        <div>
            <h1>Use Effect</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <br />
            {count}
            {workers.map}
        </div>
    );
}

export default UseEffect;