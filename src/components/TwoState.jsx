import React, { useState } from "react";


function TwoStateComponent() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    function handleClick() {
        if (!liked) {
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
        else {
            setLiked(false);
            setLikeCount(likeCount - 1);
        }
    }

    return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
        <button style={{
            background: liked ? "red" : "orange"
        }}
            onClick={handleClick}
        >
            {liked ? 'liked' : 'like'}

        </button>
        <p>{ likeCount} pepole</p>

        </div>
    )
}



export default TwoStateComponent