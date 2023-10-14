require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express.fileUpload')
const cookieParser = require('cookie.parser')

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

//connect to mongodb
const URI = process.env.MONGODB.URL;

mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}), err =>{
    if(err) throw err;
    console.log('Connected to DB')
}

app.get('/',(req,res)=>{
    res.json({msg:'welcome to the ecommerce world'})
})
const PORT = process.env.PORT || 5000


app.listen(port , ()=>{
    console.log('server is up and running',PORT)
})