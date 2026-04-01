import React from 'react'

function RenderListObject() {
    const students = [{
        name: "kylian",
        surname: "mbappe",
        age: "27",
        id: "1"
    },
    {
        name: "kylian",
        surname: "mbappe",
        age: "27",
        id: "2"
    },
    {
        name: "kylian",
        surname: "mbappe",
        age: "27",
        id: "3"
    },
    {
        name: "kylian",
        surname: "mbappe",
        age: "27",
        id: "4"
    }
    ]
    return (
        <div>
            {
                students.map((student) => (
                    <div key={student.id}>
                        <p>{student.name}</p>
                        <p>{student.surname}</p>
                        <p>{student.age}</p>
                        <hr />
                    </div>
                ))
            }
    </div>
        
  )
}

export default RenderListObject