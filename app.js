
const express = require('express')
require('./db/config')

const User = require('./db/Users')
const app = express()

app.use(express.json())

app.get('/', (req,res)=> {
    res.send("TEST")
})

app.post('/register', async (req, res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})

app.listen(5000, ()=> {
    console.log("APP IS RUNNING on 5000 !")
})