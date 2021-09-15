
/* 
    user routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidation } = require('../middlewares/validar-campos');
const { newUser, loginUser, renewToken } = require('../controllers/auth');


const router = Router();



router.post(
    '/new', 
    [ //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        fieldValidation
    ], 
    newUser
); 

router.post(
    '/', 
    [ //middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'Password Incorrecto').isLength({ min: 6 }),
        fieldValidation
    ],
    loginUser
);

router.get('/renew', renewToken);


module.exports = router;

