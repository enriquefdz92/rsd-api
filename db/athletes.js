const name = 'athletes'

let schema = {
    id: 'number',
    name: 'string',
    lastName: 'string',
    age: 'int',
    addedDate: 'Date',
    skills: 'object'
}

// DEFAULT CONTENT
let data = [
    {
        id: 1,
        name: "Enrique",
        lastName: "Fernandez",
        age: 27,
        addedDate: "6/9/2019",
        skills: [
            {
                id: 1,
                lvl: "lvl_sc"
            },{
                id: 2,
                lvl: "lvl_rx"
            },{
                id: 3,
                lvl: "lvl_rx"
            },{
                id: 4,
                lvl: "lvl_rx"
            }
        ]
    },  {
        id: 2,
        name: "Humberto",
        lastName: "Felix",
        age: 29,
        addedDate: "6/9/2019",
        skills: [
            {
                id: 1,
                lvl: "lvl_sc"
            },{
                id: 2,
                lvl: "lvl_rx"
            },{
                id: 3,
                lvl: "lvl_rx"
            },{
                id: 4,
                lvl: "lvl_rx"
            }
        ]
    },  {
        id: 3,
        name: "Abel",
        lastName: "Lopez",
        age: 31,
        addedDate: "6/9/2019",
        skills: [
            {
                id: 1,
                lvl: "lvl_sc"
            }
        ]
    }
]

module.exports = {
    schema,
    data,
}
