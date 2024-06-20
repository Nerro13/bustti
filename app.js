 const express = require("express")
 const  PORT = process.env.PORT || 3000;
 const app = express()


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render('home')
})



app.listen(PORT, ()=>{
    console.log("SERVER IS LIVE")
})