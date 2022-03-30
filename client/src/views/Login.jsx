import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        username:"",
        password:"",
    })

    const changeHandler =(e) =>{
        let {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, {withCredentials:true})
            .then(res=>history.push("/users"))
            .catch(err => console.log(err.response))
    }


    return (
        <div className="container mt-3">
            <h3>Login</h3>
            <form onSubmit={submitHandler}>
                <div className="mt-2">
                    <label>Username</label>
                    <input className="ms-2" type="text" name="username" value={user.username} onChange={changeHandler} />
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input className="ms-2" type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>

                <button className="btn btn-primary mt-2 ms-2">Login</button>
            </form>
        </div>
    )
}

export default Login