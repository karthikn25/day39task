const express = require ("express")
const fs = require ("fs")
const path = require("path")
const dirName = path.join(__dirname,"timeStamps")
//initialize express
const app = express();
app.get("/",(req,res)=>{
    res.send("Hey this is the Task Server")
})
app.get("/date-time",(req,res)=>{
   let date = new Date();
   let currentTimeStamp = date.toUTCString().slice(0,-3)
   let content = `The last Updated TimeStamp : ${currentTimeStamp}`
   console.log(dirName)
   fs.writeFile(`${dirName}/date-time.txt`,content,(err)=>{
    if(err){
        res.send("The error occur" )
        return
    }
    res.sendFile(path.join(dirName,"date-time.txt"))
   })

    
});


//listen to the server
app.listen(9090,()=>console.log(`Server started in localhost:9090`))
