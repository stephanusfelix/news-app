import React from "react";
import {useParams } from 'react-router-dom';
import NewsCard from "../components/NewsCard";
function Main(props) {
    const { category } = useParams()
    const data = {
        source: 'BBC',
        title: 'Bitcoin hits strongest level since May',
        writer: 'jonshon n',
        desc: '<ul><li>Bitcoin, in terms of market value, rose 4.6% to $53,859.6.</li><li>It passed $50,000 mark for first time in four weeks on Tuesday. </li><li>Bitcoin fell below $50,000 in early September.</li></ul>Bitcoin hit its highest level since mid-May on Wednesda…',
        url: 'https://techncruncher.blogspot.com/2021/10/bitcoin-hits-strongest-level-since-may.html"',
    };
    return(
        <>
        <h1>From mainsssss {category}</h1>
        <NewsCard data={data}/>
        </>
    )
}

export default Main;