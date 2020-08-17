const express = require('express');
const os = require('os')
const {login, dashboard, logOut, register,} = require('../middleware');
const {logger} = require('../logger');
let router = express.Router();


 router.use(logger);
/*example of using middleware with router. Global
to the routes.*/


router.get('/register',register, (req,res)=> {
    res.send('sign up to register.....{register page}');
 
})

router.get('/login',login, (req,res)=> {
    res.send('please log in.....{login page}')
})

router.get('/dashboard',dashboard, (req,res)=> {
    res.send('users dashboard page.....{Your dashboard}');
    
})

router.get('/logout',logOut, (req,res)=> {
    res.send('User log out redirect to homepage');
    
})


module.exports = router;