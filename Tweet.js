import React from 'react';
import "./App.css";

function Tweet({id, pw}){
    return(
        <div className="tweet">
            <h3>{id}</h3>
            <p>{pw}</p>
            <h3>Number of likes</h3>
        </div>
    );
}


export default Tweet