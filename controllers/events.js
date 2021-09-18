
const { response } = require('express');
const Event = require('../models/Events');


const getEvent = async(req, res = response) => {

    const events = await Event.find().populate('user', 'name');

     res.json({
        ok: true,
        events,
    });
}

const createEvent = async(req, res = response) => {

    const event = new Event( req.body );
    
    try {

        event.user = req.uid;
        const eventSaveDB = await event.save();

        res.json({
            ok: true,
            event: eventSaveDB
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador...'
        });
    }
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


