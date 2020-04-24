import React, { Component } from 'react';
const Genre = (props) => {
    let {genres} = props

    return (
        <ul className="list-group">
        {
            genres.map((genre) => {
            return(
                <li className="list-group-item">{genre["name"]}</li>
            )})
        }
        </ul>
    );
}
 
export default Genre;
