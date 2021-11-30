import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Search/Search";
import "./Navbar.scss";

export default function Navbar ({handleFilterGenre, handleFilterCreated, handleRating, handleSort}){
    
    const allGenre = useSelector(state => state.genres);

    return (
        <div>
            <div className="navbar-container">
                <SearchBar />
            </div>

            <div className="filter-container">
                <div>
                    <select defaultValue={"DEFAULT"}
                    className="select-control"
                    onChange={(e) => handleSort(e)}>
                        
                        <option selected="false" disabled="disabled" value="DEFAULT" name="DEFAULT">
                        Order ⇵
                        </option>

                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>

                    </select>

                    <select defaultValue={"DEFAULT"}
                    className="select-control"
                    onChange={(e) => handleRating(e)}>

                        <option selected="false" disabled="disabled" value="DEFAULT" name="DEFAULT">
                        Rating ⇵
                        </option>

                        <option value="top">Rating Top</option>
                        <option value="low">Rating Low</option>

                    </select>

                    <select defaultValue={"DEFAULT"}
                    className="select-control"
                    onChange={(e) => handleFilterCreated(e)}>

                        <option selected="false" disabled="disabled" value="DEFAULT" name="DEFAULT">
                        Games ⇵
                        </option>

                        <option value="all">All</option>
                        <option value="created">Created</option>
                        <option value ="api">Existent</option>

                    </select>

                    <select defaultValue={"DEFAULT"}
                    className="select-control"
                    name="FilterGenre"
                    onChange={(e) => handleFilterGenre(e)}>

                        <option selected="false" disabled="disabled" value="DEFAULT" name="DEFAULT">
                        Genres ⇵
                        </option>
                        <option value="all">All</option>

                        {allGenre.map((genre) => (
                            <option key={genre.name} value={genre.name}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
};