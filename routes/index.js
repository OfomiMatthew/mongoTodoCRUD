const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo')

const port = 8000;
const app = express();




mongoose.connect("mongodb://localhost:27017/todoapp",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
})
.then(()=>{
  console.log("connecting to database...")
})

app.use(cors())
app.use(bodyParse.json())
app.use('./api',todoRoutes)
app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})
