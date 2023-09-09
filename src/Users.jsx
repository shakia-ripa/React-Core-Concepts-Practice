import { useEffect, useState } from "react"
import User from "./User";
import './users.css'
export default function Users(){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div className="box">
            <h3>Users: {users.length}</h3>
            <div className="box" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    )
}