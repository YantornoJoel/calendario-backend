/*--------------------------------------------------------------- 
    RUTAS DE USUARIOS / AUTH
    Host /api/auth
*/



const { Router } = require('express');
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')

const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');

const router = Router();



router.post(
    '/new',
    [ //Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 carácteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);


router.post(
    '/',
    [ //Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 carácteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);


router.get('/renew', validarJWT, revalidarToken);



module.exports = router;
