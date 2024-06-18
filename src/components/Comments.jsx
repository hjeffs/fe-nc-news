import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCommentsPerArticle, deleteComment } from "../../utils/api";
import Collapsible from "./Collapsible";
import PostComment from "./PostComment";
import { UserContext } from "../contexts/UserContext";

function Comments() {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState(null);
    const { item_id } = useParams();
    const { user } = useContext(UserContext)
    console.log(user)

    useEffect(() => {
        setIsLoading(true);
        getCommentsPerArticle(item_id)
            .then((comments) => {
                setComments(comments);
                setIsLoading(false);
            })
    }, [item_id]);

    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }

    if (!comments) {
        return <p>No comments, be the first!</p>;
    }

    function deleteArticleComment(comment_id) {
        deleteComment(comment_id)
    }

    return (
        <Collapsible title="Toggle Comments">
            <PostComment></PostComment>
            <p>Total Comments: {comments.length}</p>
            <ul className="Comments_list">
                {comments.map((comment) => (
                    <li className="Comment_card" key={comment.comment_id}>
                        <h3>{comment.author}</h3>
                        <p>{comment.body}</p>
                        <p>Votes: {comment.votes} | ID: {comment.comment_id}</p>
                        <p>{new Date(comment.created_at).toString()}</p>
                        {comment.author === user.username ? <button onClick={() => deleteArticleComment(comment.comment_id)}>DELETE</button> : null}
                        {/* <button onClick={() => deleteArticleComment(comment.comment_id)}>DELETE</button> */}
                    </li>
                ))}
            </ul>
        </Collapsible>
    )
}

export default Comments;