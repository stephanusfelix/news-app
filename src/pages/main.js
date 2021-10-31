import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/main.scss";
import axios from "axios";

function Main(props) {
  const { category } = useParams();

  //kode dibawah ini coba-coba konek ke API
  const [data, setData] = useState();
  const apiKey = "bf81d07aeadd4b34aa62dc49bd08142c";
  let url = "";
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
  }, []);
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
          {data
            ? data.articles.map((news) => (
                //dibawah diganti komponen card
                <div>
                  <h1>{news.title}</h1>
                  <p>{news.description}</p>
                  <span>{news.author}</span> <br />
                  <span>{news.publishedAt}</span>
                  <span>{news.source.name}</span>
                </div>
                //diatas ini diganti komponen card
              ))
            : "Loading"}
        </div>
      </div>
    </>
  );
}

export default Main;
