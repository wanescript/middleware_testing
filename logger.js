const express = require('express');
const morgan = require('morgan')
const {DateTime} = require('luxon');
const os = require('os');



function logger (req,res,next) {
    console.log(`User ip is :${req.ip}, while arriving on the date of ${DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })} using a ${os.platform()} OS`);
    next();

    }


    module.exports = {logger};