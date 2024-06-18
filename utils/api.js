import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://hjeffs-nc-news.onrender.com/api',
})

export const getArticles = (item_id) => {
    return newsApi
    .get('/articles', { params: { article_id: item_id } })
    .then((response) => {
        return response.data.articles
    })
}

export const getArticleById = (item_id) => {
    return newsApi
        .get(`/articles/${item_id}`)
        .then((response) => {
            return response.data.article[0]
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