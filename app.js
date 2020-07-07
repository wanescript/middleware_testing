const express = require('express');
const routes = require('./routes/user_actions');
const app = express();
const port = 3000;


app.use(routes);

app.get('/', (req,res)=> {
    res.send('homepage');
});


app.listen(port,()=>console.log(`Server is running on port ${port}`));