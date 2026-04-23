const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    return res.send("Hello")
})
app.listen(8000,()=>{
    console.log("Server up and running on port 8000")
})