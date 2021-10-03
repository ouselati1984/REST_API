const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const User = require('./Models/User')
const CONTACTS = require('./Models/User')
connectDB()



//just for test
app.use(express.json())
app.use('/api/user', require('./routes/User'))


const port=4000
app.listen(port, error=>{
    try {
        console.log(`the server is running on ${port}...`);
    } catch (error) {
        console.log(error);
    }
})


