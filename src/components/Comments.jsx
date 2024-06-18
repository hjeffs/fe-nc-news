import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsPerArticle } from "../../utils/api";
import Collapsible from "./Collapsible";

function Comments() {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState(null);
    const { item_id } = useParams();

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

    return (
        <Collapsible title="Toggle Comments">
            <p>Total Comments: {comments.length}</p>
            <ul className="Comments_list">
                {comments.map((comment) => (
                    <li className="Comment_card" key={comment.comment_id}>
                        <h3>{comment.author}</h3>
                        <p>{comment.body}</p>
                        <p>Votes: {comment.votes} | ID: {comment.comment_id}</p>
                        <p>{new Date(comment.created_at).toString()}</p>
                    </li>
                ))}
            </ul>
        </Collapsible>
    )
}

export default Comments;