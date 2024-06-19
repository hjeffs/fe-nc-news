import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { postComment } from "../../utils/api"
import { UserContext } from "../contexts/UserContext"

function PostComment() {
    const [comment, setComment] = useState({
        author: '',
        body: ''
    })
    const { item_id } = useParams();
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const { user } = useContext(UserContext)

    function handleChange(event) {
        setShowSuccessMsg(false)
        const { id, value } = event.target
        setComment((emptyState) => ({
            ...emptyState,
            [id]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        postComment(item_id, comment)
        setShowSuccessMsg(true)
    }

    return (
        <div>
        {showSuccessMsg ? <p className="text_success">Your comment has been posted</p> : null}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="username"
                value={comment.username}
                onChange={handleChange}
                placeholder="Your Username"
                required
            />
            <input
                type="text"
                id="body"
                value={comment.body}
                onChange={handleChange}
                placeholder="Body"
                required
            />
            <button type="submit">Post</button>
        </form>
        </div>

    )
}

export default PostComment;