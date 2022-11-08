import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";

function App() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-10-08&sortBy=publishedAt&apiKey=8ce2e6a064354bbe801c1d6d2ec21d85"
    );
    const data = await response.json();
    setNews(data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="container">
      {news.map((n) => (
        <Cards img={n.urlToImage} title={n.title} content={n.content} />
      ))}
    </div>
  );
}

export default App;
