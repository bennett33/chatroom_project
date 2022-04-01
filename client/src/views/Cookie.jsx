import axios from 'axios'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';

const Cookie = () => {
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/cookie`)
            .then(res=>console.log("success"))
            .catch()
    })
    return (
        <div>
            <h1>Adam 2 Adam Chat</h1>
                <div className="d-flex justify-content-center">
                <h2 className="btn btn-dark"><Link to={`/register/`}>Register</Link></h2>
                    <h2 className="ms-2 btn btn-dark"><Link to={`/login/`}>Log In</Link></h2>
                </div>
        </div>
    )
}

export default Cookie