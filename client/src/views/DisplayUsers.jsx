import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useHistory, Link } from 'react-router-dom'

const DisplayUsers = () => {
    const [users, setUsers] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/allUsers`, {withCredentials: true})
            .then(res=> setUsers(res.data))
            .catch()
    },[refresh])

    const logoutHandler = ()=>{
        axios.get(`http://localhost:8000/api/logout`, {withCredentials: true})
            .then(res=>history.push("/register"))
            .catch()
    }

    return (
        <div>
            <button className="btn btn-warning" onClick={logoutHandler}>Logout</button>
            <h4 className="text-center"><Link to={`/chat/`}>Chat</Link></h4>  

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>username</td>
                    </tr>
                </thead>
                <tbody>
                    {users&&users.map((user, i)=>(
                        <tr key={i}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayUsers