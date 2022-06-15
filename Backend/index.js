const express =  require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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
  

//   app.post('/login', async(req , res) => {
//     const {email, pass} =  req.body;

//     User.findOne({email}).then(data => {
//         if(!data){return res.status(404).json({message: "User not Found"});}
//         else{
//             bcrypt.compare(pass, data.pass, (err, compareRes) => {
//                 if(err) {res.status(502).json({message: "Error your message "});}
//                 else if (compareRes) {
//                     res.status(200).json({
//                         success: true,
//                         data
//                     })
//                 }
//                 else {
//                     res.status(401).json({message: "invalid creditional" , success: false,  compareRes});
//             }})
//         }
//     }).catch(err => {
//         console.log(err)
//         res.status(400).json({
//             success: false,
//         })
//     }) 
// })

app.post('/usersignup', async(req, res) => { 
    const {password, confirmPassword, email} = req.body;
    const pass= await bcrypt.hash(password, 10)
    const confirmPass = await bcrypt.hash(confirmPassword, 10)

    const existUsername = await Users.findOne({ email });
   if (existUsername) {
     res.send('User already exists');
   }
   else{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:pass,
        confirmPassword:confirmPass,
        phone:req.body.phone,
        })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("saved")
    }).catch(err=>{
        console.log(err)
    })
}
})  

app.listen(PORT,()=>{
    console.log('running server on '+PORT)
})



