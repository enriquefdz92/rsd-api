const name = 'athletes'

let schema = {
    id: 'number',
    name: 'string',
    lastName: 'string',
    skills: []
}

// contenido inicial
let data = [
    {
        id: 1,
        name: "Enrique",
        lastName: "Fernandez",
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
    }
]

module.exports = {
    schema,
    data,
}
