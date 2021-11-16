import React from "react";
import Button from './Button'
import { connect } from "react-redux";
function ButtonGroup(props){
  const style = {
    display: 'flex'
  }
  const newsTab = () => {
    window.open(props.url);
  }
  return (
    <>
      <div style={style}>
          <Button theme={'blue'} click={newsTab}>News Page</Button>
          <Button theme={'white'} click={()=>props.add(props.save)}>Saved</Button>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return{
    add: (news) => dispatch({type: 'ADD_NEWS',payload: {news:news}})
  }
}
export default connect(null,mapDispatchToProps)(ButtonGroup);