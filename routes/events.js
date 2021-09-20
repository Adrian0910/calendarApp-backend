/* 
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldValidation } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// All routes have to be validate with JWT
router.use( validateJWT );


// et events
router.get('/', getEvent );

// Create new event
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalizacion es obligatoria').custom( isDate ),
        fieldValidation
    ],
    createEvent
);

// Update event
router.put('/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        fieldValidation
    ],
    updateEvent 
);

// Delet event
router.delete('/:id', deleteEvent );

// Default export
module.exports = router;


