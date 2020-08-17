const express = require('express');



function register (req,res,next){
    console.log('user is on the register page');
    next();
    }
    
    function login (req,res,next){
        console.log('user is at the login page....^');
        next();
        }
    
    function dashboard (req,res,next){
    console.log('welcome user you are logged in......^ {User dashboard}');
    next();
    }
    
    function logOut (req,res,next){
    console.log('user has logged out...... The user just exited the building...!');
    next();
    }

    module.exports = { login, dashboard, logOut, register,};