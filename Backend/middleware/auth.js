const { response } = require('express');
const jwt = require('jsonwebtoken');


module.exports = async(request,response, next) =>{
    // try catch to check if user is logged in or not
    try{
        // const {authorization} = request.headers
        // if(!authorization){
        //     return response.status(401).json({error:"You must be logged in1"})
        // }
        // const token = await authorization.split(' ')[1]
        // const decoded = await jwt.verify(token,RANDOM_TOKEN)
        // request.user = decoded
        // next()

        const token = await request.headers.authorization.split(' ')[1];
        const decoded = await jwt.verify(token,RANDOM_TOKEN);
        const user = await decodedToken;
        request.user = user;
        next();
    }
    catch(e){
        return response.status(401).json({error:"you must be logged in12"})
    }
}