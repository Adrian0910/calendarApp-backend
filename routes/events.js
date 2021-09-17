/* 
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// All routes have to be validate with JWT
router.use( validateJWT );


// et events
router.get('/', getEvent );

// Create new event
router.post('/', createEvent );

// Update event
router.put('/:id', updateEvent );

// Delet event
router.delete('/:id', deleteEvent );

// Default export
module.exports = router;


