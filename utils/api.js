import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://hjeffs-nc-news.onrender.com/api',
})

export const getArticles = (topicQuery) => {
    return newsApi
    .get('/articles', { params: { topic: topicQuery ? topicQuery : null } })
    .then((response) => {
        return response.data.articles
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const getArticleById = (item_id) => {
    return newsApi
        .get(`/articles/${item_id}`)
        .then((response) => {
            return response.data.article[0]
        })
        .catch((err) => {
            console.log(err.message)
        });
};

export const getCommentsPerArticle = (item_id) => {
    return newsApi
        .get(`/articles/${item_id}/comments`)
        .then((response) => {
            return response.data.article
        })
}

export const voteOnArticle = (item_id, voteChange) => {
    return newsApi
        .patch(`/articles/${item_id}`, { inc_votes: voteChange })
        .then((response) => {
            return response.data.article;
        });
};

export const getUsers = () => {
    return newsApi
        .get('/users')
        .then((response) => {
            return response.data.users
        })
}

export const postComment = (item_id, comment) => {
    return newsApi
        .post(`/articles/${item_id}/comments`, comment)
        .then((response) => {
            return response.data.comment
        })
}

export const deleteComment = (comment_id) => {
    return newsApi
        .delete(`/comments/${comment_id}`)
        .then((response) => {
            return response
        })
}

export const getTopics = () => {
    return newsApi
        .get('/topics')
        .then((response) => {
            return response.data.topics
        })
}

export const sortArticles = (sortQuery) => {
    return newsApi
        .get('/articles', { params: { sort_by: sortQuery ? sortQuery : null } })
        .then((response) => {
            const articles = response.data.articles
            const sortedArticles = articles.sort((a, b) => {
                if(a[sortQuery] < b[sortQuery]) {return 1};
                if(a[sortQuery] > b[sortQuery]) {return -1};
                return 0;
            })
            return sortedArticles
    })
}