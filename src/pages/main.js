import React from "react";
import { useHistory, useParams } from 'react-router-dom';
function Main(props) {
    const { category } = useParams()
    return(
        <>
        <h1>From main {category}</h1>
        </>
    )
}

export default Main;