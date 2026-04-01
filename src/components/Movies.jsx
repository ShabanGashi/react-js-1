import React from 'react'

function Movies({ Movietitle, MovieDesc, IsAvailable, MovieRate }) {
    return (
        <div>
            <div
                style={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '250px',
                    marginBottom: '12px',
                }}
            >
                <h3>{Movietitle}</h3>
                <p>{MovieDesc}</p>
                <button>{IsAvailable ? 'Available' : 'Unavailable'}</button>
                <p>Rating: {MovieRate}</p>
            </div>
        </div>
    )
}

export default Movies