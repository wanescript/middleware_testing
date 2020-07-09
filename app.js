const express = require('express');
const routes = require('./routes/user_actions');
const app = express();
const port = 3000;



app.use(routes);

app.get('/', (req,res)=> {
    res.send('homepage. Welcome to our shindig!');
    let d = new Date();
    let timestamp = d.getTime();
    console.log(`User ip is :${req.ip} at ${timestamp}`)
});


app.listen(port,()=>console.log(`Server is running on port ${port}`));