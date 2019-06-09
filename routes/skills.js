const express = require('express')
let router = express.Router()
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'tareas'

// GET consultar coleccion de tareas
router.get('/', (req, res, next) => {
    let athleteId = parseInt(req.body.athleteId)
    let skills = DB.select('skills', null, athleteId)
    res.status(200).send(skills)
});

// GET consultar tarea especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let athleteId = parseInt(req.body.athleteId)
    let todo = DB.select('skills', id, athleteId)
    res.status(200).send(todo)
});

// POST insertar tarea
router.post('/', (req, res, next) => {
    let todo = DB.insert('skills', req.body)
    res.status(200).send(todo)
})

// PUT actualizar tarea
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let todo = DB.update('skills', object)
    res.status(200).send(todo)
})

// DELETE borrar tarea
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let todo = DB.remove('skills', id)
    res.status(200).send(todo)
})

module.exports = router
