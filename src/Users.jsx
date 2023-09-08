import { useEffect, useState } from "react"
import './Friends.css'

export default function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },[])
    console.log(users);
    return (
        <div className="box" style={{border:'2px solid lightblue'}}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}