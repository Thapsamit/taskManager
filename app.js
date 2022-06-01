const express = require("express")
const connect = require('./db/connect')
require('dotenv').config()
const app = express()
const path = require('path')
const routes = require('./routes/routes');
const PORT = process.env.PORT||5000


app.use(express.json())
app.use(express.static('public'))
// root route
app.use('/api/v1/tasks',routes)


//routes
/*
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
})
*/
const start = async ()=>{
    try{
    await connect(process.env.MONGO_URI)
    app.listen(PORT,()=>{
        console.log("Server Running on Port = "+PORT)
    })
    }
    catch(err){
      console.log(err)
    }
}
start()