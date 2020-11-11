/*
    RUTAS DE EVENTOS
    Host api/events
*/

const { Router } = require("express");
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

const router = Router();


// Todas las rutas tienen que pasar por la validación de JWT
router.use(validarJWT)


// Obtener eventos
router.get("/", getEventos);


// Crear eventos
router.post(
    "/",
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatora').custom( isDate ),
        check('end', 'La fecha de finalización es obligatora').custom( isDate ),
        validarCampos
    ],
    crearEvento
);


// Actualizar eventos
router.put("/:id", actualizarEvento);


// Borrar eventos
router.delete("/:id", eliminarEvento);



module.exports = router;