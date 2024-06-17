import { useState, useEffect } from "react";
import { getArticleById } from "../../utils/api";
import { Link, useParams } from "react-router-dom";

function Article() {
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState(null);
    const { item_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticleById(item_id)
            .then((article) => {
                setArticle(article);
                setIsLoading(false);
            })
    }, [item_id]);

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
            <input placeholder="Write a comment"/>
            <p>Comment Count: {article.comment_count}</p>
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
