const express = require('express');
let router = express.Router();
let DB = require('../db/db')
let commonTools = require('../shared/commonTools')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let athletes = DB.select('athletes')
  res.status(200).send(athletes)
});
// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let athlete = DB.select('athletes', id)
  res.status(200).send(athlete)
});
// POST insertar usuario
router.post('/', (req, res, next) => {
  console.log(req.body)
  
  req.body.addedDate =  commonTools.GetFormattedDate()
  let athlete = DB.insert('athletes', req.body)
  res.status(200).send(athlete)
})
// GET consultar skills de un usuario especifico
router.get('/:id/skills', (req, res, next) => {
  let id = parseInt(req.params.id)
  let skills = DB.select('athletes', id).skills
  res.status(200).send(skills)
});
// PUT actualizar skills de un usuario
router.put('/:id/skills', (req, res, next) => {
  let id = parseInt(req.params.id)
  let athleteToUpdate = DB.select('athletes', id)
  console.log(athleteToUpdate.hasOwnProperty('skills'))
  if (athleteToUpdate.hasOwnProperty('skills')){
    athleteToUpdate.skills=athleteToUpdate.skills.concat(req.body)
  } else{
    athleteToUpdate.skills = new Array (req.body)
  } 
  console.log(athleteToUpdate)
  let athlete = DB.update('athletes', athleteToUpdate)
  res.status(200).send(athlete)
})


// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {
    id: id
  })
  let athlete = DB.update('athletes', object)
  res.status(200).send(athlete)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let athlete = DB.remove('athletes', id)
  res.status(200).send(athlete)
})

module.exports = router;