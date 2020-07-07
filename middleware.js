const express = require('express');

// function logger (req,res,next){
//     console.log('a visitor is on the homepage');
//     next();
//     }

function register (req,res,next){
    console.log('user is on the register page');
    next();
    }
    
    function login (req,res,next){
        console.log('user logged in at');
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