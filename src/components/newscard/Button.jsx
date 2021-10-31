import React from "react";
function Button(props) {
  const buttonCustom = () => {
    if (props.url) {
      return (
        <>
          <button
            style={style1}
            onClick={() => {
              window.open(props.url);
            }}
          >
            News Page
          </button>
        </>
      );
    } else {
        console.log(props)
      return (
        <>
          <button onClick={props.save} style={style2}>Save</button>
        </>
      );
    }
  };
  const style = {
    cursor: "pointer",
    borderRadius: "5px",
    padding: "10px 15px",
    margin:'10px 15px 0 0'
  };
  const style1 = {
    ...style,
    backgroundColor: "blue",
    border: "none",
    color: "white",
  };
  const style2 = {
      ...style,
      border: '1px solid blue',
      color: 'blue'
  };
  return (
    <>
      <div>{buttonCustom()}</div>
    </>
  );
}

export default Button;
