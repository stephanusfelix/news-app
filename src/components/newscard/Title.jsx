import React from "react";
function Title(props){
  const style={
    fontSize:'30px',
    fontWeight:'bolder'
  }
  return (
    <>
      <div>
          <div style={style}>{props.title}</div>
      </div>
    </>
  );
};

export default Title;