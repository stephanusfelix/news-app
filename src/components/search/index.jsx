import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import "./styles.css";

function Search(){
    const [val, setVal] = useState("");
    let history = useHistory();

    const submitOnClick = () => {
        history.push(`/${val}`)
      }
    
    const inputOnChange = (event) => {
        setVal(event.target.value);
      }
      
    return(
        <>
            <input onChange={inputOnChange} className="INPUT" type="text"  placeholder="Search..."/>
            <button onClick={submitOnClick} className="BUTTON">Cari Berita</button>
        </>
    )
}


export default Search