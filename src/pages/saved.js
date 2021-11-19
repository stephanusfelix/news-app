import React from "react";
import { connect } from "react-redux";
import Table from "../components/Table";

function Saved(props){
  console.log('props dari app',props.news)

    return (
      <div>
        <Table news={props.news}/>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps,null)(Saved)
