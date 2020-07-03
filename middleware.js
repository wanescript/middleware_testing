const express = require('express');

function logger (req,res,next){
    console.log('logging dis shingdig');
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

    module.exports = { logger, login, auth, logOut};