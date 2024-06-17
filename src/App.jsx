import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Search />
      <User />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:item_id" element={<Article />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
