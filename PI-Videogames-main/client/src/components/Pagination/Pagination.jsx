import React from 'react';
import "./Pagination.scss"

export default function Pagination({ gamesTotal, allVideogames, pagination }) {
    const pageNum = [];

    for(let i = 1; i <= Math.ceil(allVideogames/gamesTotal); i++) {
        pageNum.push(i);
    }

    return(
        <div className="pagination-container">
            {pageNum && pageNum.map(n => (
                <a key={n} href onClick={() => pagination(n)}>{n}</a>
            ))}
        </div>
    )
};