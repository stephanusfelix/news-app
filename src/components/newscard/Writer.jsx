import React from "react";
function Writer(props){
  const style={
    color:'#b2b8b4'
  }
  return (
    <>
      <div>
          <div style={style}>{props.writer}</div>
      </div>
    </>
  );
};

export default Writer;