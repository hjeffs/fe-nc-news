import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import UserList from "./components/UserList";
import TopicList from "./components/TopicList";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
  <UserProvider>
    <BrowserRouter>
    <div className="app">
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:item_id" element={<Article />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/topics" element={<TopicList />} />
      </Routes>
    </div>
    </BrowserRouter>
  </UserProvider>
  )
}

export default App;