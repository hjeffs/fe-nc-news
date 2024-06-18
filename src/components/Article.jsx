import { useState, useEffect } from "react";
import { getArticleById, voteOnArticle } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments"

function Article() {
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState(null);
    const { item_id } = useParams();
    const [voteError, setVoteError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getArticleById(item_id)
            .then((article) => {
                setArticle(article);
                setIsLoading(false);
            })
    }, [item_id]);

    function handleVote(voteChange) {
        if (article) {
            setArticle((currArticle) => ({
                ...currArticle,
                votes: currArticle.votes + voteChange,
            }));

            voteOnArticle(item_id, voteChange)
                .then((updatedArticle) => {
                    setArticle(updatedArticle);
                })
                .catch((error) => {
                    setArticle((currArticle) => ({
                        ...currArticle,
                        votes: currArticle.votes - voteChange,
                    }));
                    setVoteError(error);
                });
        }
    }

    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }

    if (!article) {
        return <p>Article not found.</p>;
    }

    return (
        <div className="Article_details">
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title} style={{ width: '200px', height: '200px' }} />
            <p>Article by: {article.author}</p>
            <p>{article.body}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
            <button onClick={() => handleVote(1)}>+1</button>
            <button onClick={() => handleVote(-1)}>-1</button>
            <p>{voteError}</p>
            <Comments title="See all comments"></Comments>
            <hr />
            <Link className='link' to={`/articles`}>
                Back to articles
            </Link>
            <hr />
            <Link className='link' to={`/`}>
                Go to Homepage
            </Link>
        </div>
    );
}

export default Article;
