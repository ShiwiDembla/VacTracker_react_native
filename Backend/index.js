const express =  require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtkey = "abcd"
// const {mongoURI} = require('./keys')
const mongoURI = 'mongodb+srv://Shiwani:Shiwi3245@cluster0.lvu2r.mongodb.net/loginUser?retryWrites=true&w=majority'

//only using this for once, it will give error for multiple requires
// auth routes below this, it should be on the top

require('./models/User');

const User = mongoose.model('User')
app.use(bodyParser.json())

mongoose.connect(mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    //     useCreateIndex: true,
    //   useFindAndModify: false,
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


// app.post('/',(req,res)=>{
//     console.log(req.body)
//     res.send('hello world')
//   })




  app.get('/login', async(req , res) => {
    const {email, password} =  req.body;
 
    
    if(!email || !password ){
        return  res.status(422).json({error:"Please add all the fields"})
      }
    User.findOne({email}).then(data => {
        if(!data){return res.status(404).json({message: "User not Found"});}
        else{
            bcrypt.compare(password, data.password, (err, compareRes) => {
                if(err) {res.status(502).json({message: "Error your message "});}
                else if (compareRes) {
                  const token =  jwt.sign({userId:User._id}, jwtkey)
                    res.status(201).json({
                        token,
                        success: true,
                        data
                    })
                }
                else {
                    res.status(401).json({message: "Email or password is invalid!" , success: false,  compareRes});
            }})
        }
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            success: false,
        })
    }) 
})

//middleware for auth
const requireLogin = (req,res,next) =>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"Please provide JWT token"})
    }
    // try{
        const token = authorization.replace('Bearer ','')
        const {userId} = jwt.verify(token,jwtkey, async(err, payload) => {

            //if token not correct
        if(err){
            res.status(401).json({error:"JWT token incorrect"})
        }
        const {userId} = payload;
        const user = await User.findById(userId);
        req.user = user;
        next();
    } )
    
        // req.user = userId
        // console.log(userId)
        // next()
    // }
    // catch(err){
    //     return res.status(401).json({error:"you must be logged in12"})
    // }
}
   

app.get('/test',requireLogin,(req,res)=>{
 
 res.json({message:req.user})

//  res.json({message:req.user.id})
})




// app.post('/usersignup', async(req, res) => { 
//     const {password, confirmPassword, email, phone, name} = req.body;
//     const pass= await bcrypt.hash(password, 10)
//     const confirmPass = await bcrypt.hash(confirmPassword, 10)

//     const existUsername = await User.findOne({ email });

//     if(!email || !password || !confirmPassword || !phone || !name){
//       return  res.status(422).json({error:"Please add all the fields"})
//     }
//    if (existUsername) {
//      res.send('User already exists with this email');
//    }

//    //try catch block?
//    else{
//     //saving new user
//     const user = new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:pass,
//         confirmPassword:confirmPass,
//         phone:req.body.phone,
//         })
//         user.save()
//     // await user.save()
//     // const token =  jwt.sign({userId:user._id}, jwtkey)
//     // res.status(200).json({message:"Signup success"})
//     .then(data=>{
//         console.log(data)
//         res.send("saved")
//     }).catch(err=>{
//         console.log(err)
//     })
// }
// })  





//implementing jwt web token
app.post('/usersignup', async(req, res) => { 
    const {password, confirmPassword, email, phone, name} = req.body;
    const pass= await bcrypt.hash(password, 10)
    const confirmPass = await bcrypt.hash(confirmPassword, 10)

    const existUsername = await User.findOne({ email });

    if(!email || !password || !confirmPassword || !phone || !name){
      return  res.status(422).json({error:"Please add all the fields"})
    }
   if (existUsername) {
     res.send('User already exists with this email');
   }

   //try catch block?
   else{
    try{
          //saving new user
        const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:pass,
        confirmPassword:confirmPass,
        phone:req.body.phone,
        })

    await user.save()
    const token =  jwt.sign({userId:user._id}, jwtkey)
    res.send({token,success:true})
    // res.status(200).json({message:"Signup success"})
    }
  catch(e){
    // use return to stop the function     
  return  res.status(422).json(err.message)
  }



    }
})  







app.listen(PORT,()=>{
    console.log('running server on '+PORT)
})



