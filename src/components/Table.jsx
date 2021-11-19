import React from "react";
import "../styles/components/table.scss";
function Table(props) {
  
  return (
    <>
      <table >
        <thead>
          <tr>
            <th>Source</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.news.map((news, index) => (
            <tr key={index}>
              <td>{news.source.name} - {news.author} <br/>
              <a target="_blank" href={news.url} rel="noreferrer">News Page</a></td>
              <td>{news.title}</td>
              <td>{news.description}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
