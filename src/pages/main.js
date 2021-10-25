import React from "react";
import {useParams } from 'react-router-dom';
function Main(props) {
    const { category } = useParams()
    return(
        <>
        <h1>From mainsssss {category}</h1>
        </>
    )
}

export default Main;