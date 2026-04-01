import React from 'react'

function Courses({ title, instructor, price }) {
    return (
        <div>
            <div
                style={{
                    border: '1px solid orange',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '250px',
                }}
            >
                <h3>{title}</h3>
                <p>By {instructor}</p>
                <p>Price {price}</p>
            </div>
        </div>
    )
}

export default Courses;