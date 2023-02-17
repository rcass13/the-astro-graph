const router = require('express').Router();

const formatDateToDayOfYear = require('../../helpers/getSignByDates.js');
const getSignByDates = require('../../helpers/getSignByDates');
const User = require('../../models/Users.js');



Date.prototype.getDayOfYear = function() {
    var start = new Date(this.getFullYear(), 0, 0);
    var diff = this - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

router.get('/', (req, res) => {
    console.log(req.session)
    if(req.session.isAuth){
        res.json({isAuth: req.session.isAuth})
    }else {
        res.json({isAuth: req.session.isAuth})
    }
}) 

// GET one user
router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

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
        console.log(dbUserData, req.body.password);
        
        // const validPassword = await dbUserData.checkPassword(req.body.password);
        const validPassword = dbUserData.dataValues.password == req.body.password
    
        console.log(validPassword)

        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect Email or Password!' });
            return;
        }
        req.session.save(() => {
            req.session.isAuth = true;
            console.log(req.session);
      
            res
              .status(200)
              .json({ user: dbUserData, isAuth: true });
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
        let dateObj = new Date(req.body.birthday);
        let dayOfYear = dateObj.getDayOfYear();
        userData = await User.create({ 
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday,
            name: req.body.name,
            sign: getSignByDates(dayOfYear)
        })
        if (userData !== null){
            console.log(req.session)
            req.session.save(() =>{ 
                req.session.isAuth = true
                console.log(req.session);
                res
                    .status(200)
                    .json({
                        user: userData,
                        isAuth: true
                        
                    })
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