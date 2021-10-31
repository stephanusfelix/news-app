import React from "react";
import { ButtonGroup, Desc, Source, Title, Writer } from "./newscard/index.js";
const Navbar = (props) => {
  const data = props.data;
  const style = {
    width: "300px",
    padding: "25px",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px 0px",
    borderRadius: "10px",
    margin: "20px",
    overflow:'hidden'
  };
  const save= ()=>{
    console.log('masuk')
  }
  return (
    <>
      <div style={style}>
        <Source source={data.source} />
        <Title title={data.title} />
        {data.writer ? <Writer writer={data.writer} /> : <></>}
        <Desc desc={data.desc} />
        <ButtonGroup url={data.url} save={save}/>
      </div>
    </>
  );
};

export default Navbar;
