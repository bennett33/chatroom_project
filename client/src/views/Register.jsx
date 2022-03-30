import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        confirmPassword:""
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
        console.log("in submitHandler")
        axios.post(`http://localhost:8000/api/register`, user, {withCredentials:true})
            .then(res=>history.push("/users"))
            .catch(err => console.log("error. failed"))
    }


    return (
        <div className="container mt-3">
            <h3>Register New User</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input className="ms-2" type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div  className="mt-2">
                    <label>Last Name</label>
                    <input className="ms-2" type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
                </div>
                <div className="mt-2">
                    <label>Username</label>
                    <input className="ms-2" type="text" name="username" value={user.username} onChange={changeHandler} />
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input className="ms-2" type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div className="mt-2">
                    <label>Confirm Password</label>
                    <input className="ms-2" type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <button className="btn btn-primary mt-2 ms-2"> Register </button>
            </form>
            <h4 className="text-center"><Link to={`/login/`}>Log In</Link></h4>  
        </div>
    )
}

export default Register