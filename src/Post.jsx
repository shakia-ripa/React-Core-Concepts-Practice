export default function Post({post}){
    const postStyles = {
        border: '2px solid salmon',
        borderRadius: '15px',
        margin: '10px', 
        padding: '10px'
    }
    const {title, body, userId, id} = post;
    return(
        <div style={postStyles}>
            <h5>Title: {title}</h5>
            <p><small>UserId: {userId}</small></p>
            <p><small>PostId: {id}</small></p>
            <p>{body}</p>
        </div>

    )
}