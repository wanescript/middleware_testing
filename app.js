const express = require('express');
const {logger, login, auth, logOut}= require('./middleware');
const app = express();
const port = 3000;


app.use(logger);


app.get('/', (req,res)=> {
    res.send('homepage')
})

app.get('/login', login, (req,res)=> {
    res.send('you have logged in')
})

app.get('/users', auth, (req,res)=> {
    res.send('users page');
    
})

app.get('/logout', logOut, (req,res)=> {
    res.send('User log out redirect to homepage');
    
})



app.listen(port,()=>console.log(`Server is running on port ${port}`));