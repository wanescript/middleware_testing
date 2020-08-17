const express = require('express');
const routes = require('./routes/user_actions');
const helmet = require('helmet')
const {DateTime} = require('luxon');
const morgan = require('morgan');
const {logger} = require('./logger');
const os = require('os');
const app = express();
const port = 3000;


app.use(helmet());
app.use(morgan('short'));
app.use(logger);
app.use(routes);


app.get('/', (req,res)=> {
    res.send('homepage. Welcome to da spot visitor...!');
    console.log('We have a visitor ....')
});


app.listen(port,()=>console.log(`We up and listening on port ${port}`));