// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const controller = require('../controllers/tareas');

/**
 * @swagger
 * /tareas:
 *  get:
 *    description: Ver listado de tareas
 *    responses:
 *      200: 
 *       description: lista de tareas del usuario
 *      400:
 *       description: Error al listar las tareas
 */
router.get('/',controller.listar);

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: crear una nueva tarea
 *    parameters:
 *      - in: body
 *        name: tareaNueva
 *        description: JSON que contenga los atributos de una tarea(titulo, descripcion, status y fechaCreacion)
 *        schema:
 *          type: Object
 *    responses:
 *      201: 
 *       description: Tarea creada correctamente
 *      400:
 *       description: Error al crear la tarea
 */
router.post('/',express.json(),controller.crear)

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: Actualizar una tarea existente
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de tarea para actualizar
 *        schema:
 *          type: String
 *      - in: body
 *        name: tareaActualizada
 *        description: JSON que contenga los atributos para actualizar de la tarea(titulo, descripcion, status y fechaCreacion)
 *        schema:
 *          type: Object
 *    responses:
 *      200: 
 *       description: Tarea actualizada correctamente
 *      400:
 *       description: Error al actualizar la tarea
 */
router.put('/:id',express.json(),controller.actualizar)

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    description: Consultar una tarea específica
 *    parameters:
 *      - in: path
 *        name: id
 *        description: el id de la tarea para consultar
 *    responses:
 *      200: 
 *       description: Tarea consultada correctamente
 *      400:
 *       description: Error al consultar la tarea
 */
router.get('/:id',controller.verId)

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    description: crear una nueva tarea
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea a borrar
 *        required: true
 *    responses:
 *      200:
 *       description: Se elimino la tarea correctamente
 *      400:
 *       description: Error al eliminar la tarea
 */
router.delete('/:id',controller.eliminar)


module.exports = router;