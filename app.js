const express = require('express');
const routes = require('./routes/user_actions');
const helmet = require('helmet')
const morgan = require('morgan')
const {DateTime} = require('luxon');
const os = require('os');
const app = express();
const port = 3000;


app.use(helmet());
app.use(morgan('short'));
app.use(routes);

app.get('/', (req,res)=> {
    res.send('homepage. Welcome to da spot visitor...!');
    console.log(`User ip is :${req.ip}, while arriving on the date of ${DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
} using a ${os.platform()} OS`);
});


app.listen(port,()=>console.log(`We up and listening on port ${port}`));