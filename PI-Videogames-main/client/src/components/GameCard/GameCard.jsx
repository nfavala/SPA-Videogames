import React from "react";
import { Link } from "react-router-dom";
import line from "../images/yellow-line.png"
import imageDefault from "../images/image-default.jpg";
import "./GameCard.scss";

export default function GameCard ({name, image, genres, id, rating}) {
    let genre = genres.map((e) => e.name);

    return(
        <div className="card-container">
            <li className="game-card">
                <Link to={"/videogame/" + id}>
                    <img className="game-image"
                         src={image||imageDefault}
                         alt="not found" 
                         width="450px"
                         height="380px"
                         />
                </Link>
                <div className="title-name">{name}</div>
                <img className="lineOne" alt="line" src={line}/>
                <div className="genre-title">Genres</div>
                <div className="genre">{genre.join("-")}</div>
                <img className="lineTwo" alt="line" src={line}/>
                <div className="rating-title">Rating</div>
                <div className="rating">{rating}</div>
            </li>
        </div>
    )
};