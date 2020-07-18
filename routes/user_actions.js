const express = require('express');
const morgan = require('morgan')
const {login, auth, logOut, register} = require('../middleware');
let router = express.Router();


//router.use()
//example of using middleware with router


router.get('/register', register, (req,res)=> {
    res.send('sign up to register');
    console.log(req.protocol)
 
})

router.get('/login', login, (req,res)=> {
    res.send('please log in')
})

router.get('/users', auth, (req,res)=> {
    res.send('users page');
    
})

router.get('/logout', logOut, (req,res)=> {
    res.send('User log out redirect to homepage');
    
})


module.exports = router;