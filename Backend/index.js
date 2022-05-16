const express =  require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const {mongoURI} = require('./keys')
const mongoURI = 'mongodb+srv://Shiwani:Shiwi3245@cluster0.lvu2r.mongodb.net/loginUser?retryWrites=true&w=majority'

//only using this for once, it will give error for multiple requires
// auth routes below this, it should be on the top

require('./models/User');
app.use(bodyParser.json())

mongoose.connect(mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo')
})

mongoose.connection.on('error',(err)=>{

    console.log('thats error',err)
})


// app.get('/',(req,res)=>{
//   res.send('hello world')
// });


app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('hello world')
  })
  
app.listen(PORT,()=>{
    console.log('running server on '+PORT)
})
