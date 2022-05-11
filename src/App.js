import './App.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import NewsCard from './Components/NewsCard/NewsCard';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-04-11&sortBy=publishedAt&apiKey=2e5be4512d8341edb33d610f61f1c5ee")
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div className="App">
      <h1 className="pt-5 text-primary">Articles About Tesla</h1>
      <Row xs={1} md={3} className="g-4 mx-3 my-3">
        {
          news.length === 0 ?
            <Spinner className="spinner" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            news.map(nw => <NewsCard key={nw.title} news={nw} />)
        }
      </Row>
    </div >
  );
}

export default App;
