import { useState, useEffect } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";

function TopicList() {
    const [isLoading, setIsLoading] = useState(true);
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getTopics()
            .then((topics) => {
                setTopics(topics);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }

    return (
        <ul className="Topics_list">
            {topics.map((topic, index) => (
                <li className="Topics_card" key={index}>
                    <h2>{topic.slug}</h2>
                    <>{topic.description}</>
                    <br></br>
                    <Link className='link' to={`/articles?topic=${topic.slug}`}>
                        Go to {topic.slug} articles 
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default TopicList;