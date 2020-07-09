const express = require('express');


function register (req,res,next){
    console.log('user is on the register page');
    next();
    }
    
    function login (req,res,next){
        console.log('user is at the login page');
        next();
        }
    
    function auth (req,res,next){
    console.log('authenticated user permission');
    next();
    }
    
    function logOut (req,res,next){
    console.log('user has logged out');
    next();
    }

    module.exports = { login, auth, logOut, register};