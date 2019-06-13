const express = require('express')
let router = express.Router()
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'Skills'

// GET consultar coleccion de Skills
router.get('/', (req, res, next) => {
    let athleteId = parseInt(req.body.athleteId)
    let skills = DB.select('skills', null, athleteId)
    res.status(200).send(skills)
});

// GET consultar Skill especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let athleteId = parseInt(req.body.athleteId)
    let todo = DB.select('skills', id, athleteId)
    res.status(200).send(todo)
});

// POST insertar Skill
router.post('/', (req, res, next) => {
    let todo = DB.insert('skills', req.body)
    res.status(200).send(todo)
})

// PUT actualizar Skill
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let todo = DB.update('skills', object)
    res.status(200).send(todo)
})

// DELETE borrar Skill
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let todo = DB.remove('skills', id)
    res.status(200).send(todo)
})

module.exports = router
