const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generateJWT } = require('../helpers/jwt');



const newUser = async( req, res = response ) => {

    const { email, password } = req.body;

    try {

        let user = await Usuario.findOne({ email })
        
        if( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        user = new Usuario( req.body );

        // password cryp
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );
    
        await user.save();

        // Generate JWT
        const token = await generateJWT( user.id, user.name);
    
        // *validation example, code 201*
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const user = await Usuario.findOne({ email })

        if( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

    // Confirm passwords
        const validPaswworrd = bcrypt.compareSync( password, 
            user.password );

        if( !validPaswworrd ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto',
            });
        }

        // Generate JWT
        const token = await generateJWT( user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const renewToken = async(req, res = response) => {

    const { uid, name } = req;
    
    // Generate and return a new JWT 
    const token = await generateJWT( uid, name );

    res.json({
        ok: true,
        uid, name,
        token
    })
}

module.exports = {
    newUser,
    loginUser,
    renewToken
}


