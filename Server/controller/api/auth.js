const router = require('express').Router();
const { request } = require('express');
const { findAll } = require('../../models/Users.js');
const User = require('../../models/Users.js');


//Sign In
router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email
            },

        })

        if (!dbUserData) {
            res
                .status(400)
                .json({message: 'Incorrect Email or Password!'});
            return;
        }
        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect Email or Password!' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            console.log(req.session.cookie);
      
            res
              .status(200)
              .json({ user: dbUserData, message: 'You are now logged in!' });
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
    }
})

// Signup 
router.post('/signup', async (req, res) => {
    console.log(req.body)
    // try {
        let userData = await User.findOne({
            where: {
                email: req.body.email
            },
        })
        if (userData) {
            res
                .status(409)
                .json({ user: userData, message: 'User already exist!'});
            return
        }
        userData = await User.create({ truncate: true, 
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday,
            name: req.body.name
        })
        if (userData !== null){
            res
                .status(200)
                .json({
                    data:userData,
                    message: 'User has been successfully created!'
                })
        }else {
            res 
                .status(409)
                .json({
                    message: 'User failure to create!'
                })
        }

    // }
    // catch(e){
    //     res
    //         .status(500)
    //         .json({
    //             message: 'Server Error!'
    //         })
    // }
})


module.exports = router