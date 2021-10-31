import React from "react";
import Button from './Button'
function ButtonGroup(props){
  const style = {
    display: 'flex'
  }
  return (
    <>
      <div style={style}>
          <Button url={props.url}/>
          <Button save={props.save}/>
      </div>
    </>
  );
};

export default ButtonGroup;