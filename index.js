const express = require('express');
const app = express();
const {PORT=3000} = process.env

app.get('/', (req,res)=>{
    
})
app.listen(PORT, ()=>{
    console.log(`Rodando em ${PORT}`)
})