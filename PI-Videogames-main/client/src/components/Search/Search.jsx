import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameName } from "../../actions/index";
import "./Search.scss";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!name.length){
            alert("Please enter a Videogame");
        }else{
            dispatch(getVideogameName(name));
            setName("");
        }
    };

    return (
        <>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <div className="search-container">
                <input className="search"
                    type="text"
                    value={name}
                    placeholder="Search a Videogame"
                    onChange={(e) => {handleInputChange(e)}}
                    />
                <button className="search-button" type="submit">Search</button>
            </div>
        </form>
    </>
    )
};