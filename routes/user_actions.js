const express = require('express');
const os = require('os')
const {login, dashboard, logOut, register} = require('../middleware');
let router = express.Router();


// router.use();
//example of using middleware with router


router.get('/register', register, (req,res)=> {
    res.send('sign up to register');
    console.log(req.protocol)
 
})

router.get('/login', login, (req,res)=> {
    res.send('please log in')
})

router.get('/users', dashboard, (req,res)=> {
    res.send('users dashboard page');
    
})

router.get('/logout', logOut, (req,res)=> {
    res.send('User log out redirect to homepage');
    let timestamp = Date.now();
    console.log(`User ip is :${req.ip} at the time of${timestamp} with a ${os.platform()} OS just exited the building...!`)
    
})


module.exports = router;