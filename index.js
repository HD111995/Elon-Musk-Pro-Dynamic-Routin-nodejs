const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/about.html'))
})
app.get('/works',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/works.html'))
})
app.get('/gallery',(req,res)=>{
    res.sendFile('./views/gallery.html',{root:__dirname})
})
app.get('/style',(req,res)=>{
    res.sendFile('./public/css/style.css',{root:__dirname})
})
app.get('/aboutcss',(req,res)=>{
    res.sendFile('./public/css/about.css',{root:__dirname})
})
app.get('/workcss',(req,res)=>{
    res.sendFile('./public/css/works.css',{root:__dirname})
})
app.get('/gallcss',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/css/gallery.css'))
})
app.get('/navcss',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/css/nav.css'))
})
app.listen(3000)