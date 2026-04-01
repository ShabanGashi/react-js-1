import React from "react";

function RenderList() {
    const states = ["kosovo", "albania", "germany"];
    return (
        <div>
            <ul>
                {
                    states.map((state) => (
                        <li>
                            {state}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default RenderList;