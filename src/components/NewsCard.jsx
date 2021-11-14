import React from "react";
import { ButtonGroup, Desc, Source, Title, Writer } from "./newscard/index.js";
const Navbar = (props) => {
  const data = props.data;
  const style = {
    width: "90%",
    maxWidth :"400px",
    padding: "25px",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px 0px",
    borderRadius: "10px",
    margin: "20px",
    overflow:'hidden'
  };
  return (
    <>
      <div style={style}>
        <Source source={data.source.name} />
        <Title title={data.title} />
        {data.author ? <Writer writer={data.author} /> : <></>}
        <Desc desc={data.description} />
        <ButtonGroup url={data.url} save={data}/>
      </div>
    </>
  );
};

export default Navbar;
