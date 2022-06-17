import React, {useState} from 'react'

export default function Auth() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [auth,setAuth] = useState('login')

  return (
    <div><h1>
        please {auth}! 
        </h1></div>
  )
}
