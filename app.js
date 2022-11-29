require('dotenv').config()
const express = require('express');
const User = require('./model/user')
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello rohan ingle</h1>');
})

app.post('/signUp', async(req, res) =>{

    // for all mandatory field
    const{firstName, lastName, email, password} = req.body;
    // another way :- req.body.firstName

    if(!(firstName && lastName && email && password)){
        res.status(400).send('All the fields are required')
    }

    // Unique email
    const extuser = await User.findOne(email)
    // Its find unique value
    if(extuser){
        res.status(400).send('user already exists')
    }
})

module.exports = app;