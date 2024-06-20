import { useState, useEffect, useCallback } from "react";
import { getArticles } from "../../utils/api";
import { Link, useLocation } from "react-router-dom";

function ArticleList() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    
    const { search } = useLocation();
    const query = search.split("=");

    let topicQuery = '';
    let sortQuery = '';

    switch (query[0]) {
        case '?topic':
            topicQuery = query[1];
            break;
        case '?sort_by':
            sortQuery = query[1];
            break;
    }
    
    const sortArticles = useCallback((articles, sortQuery) => {
        const sortedArticles = articles.sort((a, b) => {
          if (sortQuery === "created_at") {
            return new Date(b[sortQuery]) - new Date(a[sortQuery]);
          }
          if (Number(a[sortQuery]) < Number(b[sortQuery])) {
            return 1;
          }
          if (Number(a[sortQuery]) > Number(b[sortQuery])) {
            return -1;
          }
          return 0;
        });
        setArticles([...sortedArticles]);
      }, []);

    useEffect(() => {
        setIsLoading(true);
        if (sortQuery) {
            getArticles()
                .then((articles) => {
                    sortArticles(articles, sortQuery);
                    setIsLoading(false);
                });
        } else {
            getArticles(topicQuery)
                .then((articles) => {
                    setArticles(articles);
                    setIsLoading(false);
                });
        }
    }, [sortQuery, topicQuery, sortArticles]);

    const handleSort = (sortKey) => {
        sortArticles(articles, sortKey);
    };
    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }
    return (
        <div>
            <p>Sort by the buttons below</p>
            <button onClick={() => handleSort("created_at")}>DATE</button>
            <button onClick={() => handleSort("comment_count")}>COMMENTS</button>
            <button onClick={() => handleSort("votes")}>VOTES</button>
            <ul className="Articles_list">
                {articles.map((article) => (
                    <li className="Article_card" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <img src={`${article.article_img_url}`} alt={article.title} style={{ width: '200px', height: '200px' }} />
                        <p>Article by: {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        <p>Comment Count: {article.comment_count}</p>
                        <p>Votes: {article.votes}</p>
                        <p>{new Date(article.created_at).toString()}</p>
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
        </div>
    );
}
export default ArticleList;







