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
app.get("/admissions", (req,res)=>{
    res.render('admissions')
})
app.get("/academics",(req,res)=>{
    res.render("academics")
})
app.get("/departments",(req,res)=>{
    res.render("departments")
})
app.get("/services",(req,res)=>{
    res.render("services")
})
app.get("/sports",(req,res)=>{
    res.render("sports")
})

app.listen(PORT, ()=>{
    console.log("SERVER IS LIVE")
})