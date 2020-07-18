const express = require('express');
const routes = require('./routes/user_actions');
const helmet = require('helmet')
const morgan = require('morgan')
const os = require('os');
const app = express();
const port = 3000;


app.use(helmet());
app.use(morgan('combined'));
app.use(routes);

app.get('/', (req,res)=> {
    res.send('homepage. Welcome to da spot visitor...!');
    let timestamp = Date.now();
    console.log(`User ip is :${req.ip} at the time of${timestamp} with a ${os.platform()} OS`)
    console.log(os.type());
    console.log(os.uptime());
    console.log(os.userInfo([]));
    console.log(os.hostname());
    console.log(os.freemem());
    console.log(os.cpus());
    
});

// app.get('/homepage',(req,res)=>{
//     res.send('side page')
//     console.log('logging morgan')
// })


app.listen(port,()=>console.log(`Server is running on port ${port}`));