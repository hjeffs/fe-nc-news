import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function ArticleList() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const { search } = useLocation()
    const query = search.split("=")
    // console.log(query)
    let topicQuery = '';
    let sortQuery = ''

    switch (query[0]) {
        case '?topic': topicQuery = query[1];
        break;
        case '?sort_by': sortQuery = query[1];
        break;
    }
    
    // const topicQuery = search.split("=").pop()
    // const sortQuery = search.split("=").pop()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setIsLoading(true);
        getArticles(topicQuery, sortQuery)
            .then((articles) => {
                setArticles(articles);
                setIsLoading(false);
            });
    }, [topicQuery, sortQuery]);

    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }

    return (
        <ul className="Articles_list">
            {articles.map((article) => (
                <li className="Article_card" key={article.article_id}>
                    <h2>{article.title}</h2>
                    <img src={`${article.article_img_url}`} alt={article.title} style={{ width: '200px', height: '200px' }}/>
                    <p>Article by: {article.author}</p>
                    <p>Topic: {article.topic}</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <Link className='link' to={`/articles/${article.article_id}`}>
                        Read full article
                    </Link>
                    <hr></hr>
                    <Link className='link' to={`/`}>
                        Go to Homepage
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ArticleList;
