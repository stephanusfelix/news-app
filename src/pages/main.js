import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsCard from '../components/NewsCard'
import "../styles/pages/main.scss";
import axios from "axios";

function Main(props) {
  const { category } = useParams();

  //kode dibawah ini coba-coba konek ke API
  const [data, setData] = useState();
  const apiKey = "bf81d07aeadd4b34aa62dc49bd08142c";
  let url = "url";
  if (!category) {
    url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [url]);
  //kode diatas ini coba-coba konek ke API

  return (
    <>
      <div className="main">
        <h1 className="head">
          {!category ? category : category[0].toUpperCase() + category.slice(1)}{" "}
          News
        </h1>
        <hr></hr>

        <div className="allnews">
          {data ? (
            data.articles.map((news,index) => (
              <NewsCard data={news} key={index}/>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
