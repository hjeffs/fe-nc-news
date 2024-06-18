import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://hjeffs-nc-news.onrender.com/api',
})

export const getArticles = (item_id) => {
    return newsApi
    .get('/articles', { params: { article_id: item_id } })
    .then((response) => {
        // console.log('getArticles')
        // console.log(response.data, '<< .data')
        // console.log(response.data.articles, '<<<.articles')
        return response.data.articles
    })
}

export const getArticleById = (item_id) => {
    // console.log(item_id);
    return newsApi
        .get(`/articles/${item_id}`)
        .then((response) => {
            // console.log(response.data.article[0])
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