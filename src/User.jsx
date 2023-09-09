export default function User({user}){
    const userStyle = {
        border:'2px solid salmon', 
        margin: '20px',
        padding: '20px', 
        borderRadius: '15px'
    }
    const {username, email} = user;
    return(
        <div style={userStyle}>
            <p>User: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}