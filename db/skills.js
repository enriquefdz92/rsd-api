const name = 'skills'

let schema = {
    id: 'number',
    title: 'string',
    lvl_sc: 'string',
    lvl_in: 'string',
    lvl_rx: 'string'
}

// DEFAULT CONTENT
let data = [{
    id: 1,
    title: 'Front Squat',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 2,
    title: 'Back Squat',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 3,
    title: 'Thruster',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 4,
    title: 'Power Clean',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 5,
    title: 'OHS',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 6,
    title: 'Clean & Jerk',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 7,
    title: 'Squat Clean',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 8,
    title: 'Squat Snatch',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 9,
    title: 'Push Press',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}, {
    id: 10,
    title: 'Dead Lift',
    lvl_sc: 'Perform 15 reps',
    lvl_in: 'Perform 15 reps',
    lvl_rx: 'Perform 15 reps'
}]

module.exports = {
    schema,
    data,
}