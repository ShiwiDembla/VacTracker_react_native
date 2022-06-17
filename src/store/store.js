import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducers/authReducer'
// import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    reducer:{
        // counter: counterReducer,
        user: authReducer 
        // an object having user. and authreducer gives back token and details in another object
        // { user:{ token:" "}}
    },


});

export default store;