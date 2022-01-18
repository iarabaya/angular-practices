const { response } = require('express');

const User = require('../models/user');

const getUsers = async (req, res) =>{

    const users = await User.find({}, 'name email role google');

    res.status(400).json({
        ok: true,
        msg: 'get Users',
        users
    });
}

const createUser = async (req, res = response) =>{

    const { name, password, email } = req.body;

    try {

        const existeEmail = await User.findOne({ email });

        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'The email is already registered'
            })
        }

        const user = new User( req.body );
        await user.save();
    
        res.json({
            ok: true,
            msg: 'create User',
            user
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error...check logs'
        })
    }
  
}

modules.exports = { getUsers, createUser }