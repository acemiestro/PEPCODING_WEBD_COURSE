import React from 'react';
const Pagination = (props) => {
    let {limit, size, currentPage, getPageNumber} = props;
    let noOfPages = Math.ceil(size/limit);
    const arr=[];
    for(let i=1; i <= noOfPages; i++){
        arr.push(i);
    }
    return(
        <ul>
            {arr.map(pageNumber => {
                return (
                    <li onClick = {() => {   getPageNumber(pageNumber) }}>
                    {pageNumber}
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;