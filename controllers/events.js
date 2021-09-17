
const { response } = require('express');

const getEvent = (req, res = response) => {
     res.json({
        ok: true,
        msg: 'getEvent',
    });
}

const createEvent = (req, res = response) => {

    // Verify that body has the event
    console.log(req.body)

     res.json({
        ok: true,
        msg: 'createEvent'
    });
}

const updateEvent = (req, res = response) => {
     res.json({
        ok: true,
        msg: 'updateEvent',
    });
}


const deleteEvent = (req, res = response) => {
     res.json({
        ok: true,
        msg: 'deleteEvent',
    });
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
};


