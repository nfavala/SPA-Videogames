import React, { useState, useEffect } from "react";
import { getGenres, postVideoGame } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import line from "../images/yellow-line.png";
import "./CreateGame.scss";

function validate(input) {
    let error = {};
    if (!input.name.trim()) {
      error.name = "Name require";
    }
    if (!input.description.trim()) {
      error.description = "Description require";
    }
    if (!input.platforms.length) {
      error.platforms = "Platforms require";
    }
    return error;
  }

export default function CreateGame() {
    const dispatch = useDispatch();
    const genre =  useSelector(state => state.genres);
    const platform = useSelector(state => state.platforms)

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platforms: [],
        genres: [],
    });

    function handleChange(e) {
        setInput({
            ...input, [e.target.name]: e.target.value,
        })

        setErrors(
            validate({
                ...input, [e.target.name]: e.target.value,
            })
        );
    }

    function handleSelectPlatform(e){
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        })
    }

    function handleSelectGenre(e){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value,
            })
        );

        if(Object.keys(errors).length === 0){
            dispatch(postVideoGame(input));
            alert("You've created a videogame!");
            setInput({
                name: "",
                description: "",
                releaseDate: "",
                rating: "",
                platforms: [],
                genres: [],
            })
        }else{
            alert("ERROR: Video Game not created");
            return; 
        }
    }

    function handleDeleteGenre(e) {
        setInput({
            ...input,
            genres: input.genres.filter(g => g !== e)
        })
    };

    function handleDeletePlatform(e) {
        setInput({
            ...input,
            platforms: input.platforms.filter(g => g !== e),
        })
    }

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);

    return (
        <>
        <div className="home-button">
            <Link className="home-btn" to="/home">
                HOME
            </Link>
        </div>
        <div className="line">
            <img className="line-img" alt="divisor" src={line}/>
        </div>
        <h1 className="page-title">Create your own Video Game</h1>
        <div className="main">
            <div className="create-Game">
                <div className="left">
                    <img className="create-img" alt="game-img" src="https://i.pinimg.com/originals/f7/a9/e3/f7a9e3bdd347b543baa91e1ad80257bd.jpg"/>
                </div>
            <div className="right">
                <form className="creation-form" onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                        className="inputs"
                        placeholder="Name videogame"
                        required
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                         className="inputs"
                         placeholder="Description videogame"
                         type="text"
                         required
                         value={input.description}
                         name="description"
                         onChange={(e) => handleChange(e)}
                       />
                       {errors.description && <p className="error-message">{errors.description}</p>}
                    </div>

                    <p>Platforms</p>
                    <select className="select" onChange={(e) => handleSelectPlatform(e)}>
                        {platform.map(p => (
                            <option key= {p.name} value={p.name}>{p.name}</option>
                        ))}
                    </select>
                    
                    <div className="inputsC">
                {input.platforms.map((p) => (
                  <div className="selected">
                    <p>{p}</p>
                    <button className="delete-btn" onClick={() => handleDeletePlatform(p)}>Delete</button>
                  </div>
                ))}
              </div>
                    {errors.platforms && (<p className="error-message">{errors.platforms}</p>)}
                
                   <div className="inputsB">
                       <p className="date">Release date:</p>
                       <div className="date-input">
                           <input
                            type="date"
                            value={input.releaseDate}
                            className="inputs"
                            name="releaseDate"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>

                        <p className="rating">Rating:</p>
                        <div className="rating-input">
                            <input
                            className="inputs"
                            type="number"
                            value={input.rating}
                            min="0"
                            max="5"
                            name="rating"
                            onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <p>Genres</p>
                    <select className="select" onChange={(e) => handleSelectGenre(e)}>
                        {genre.map(g => (
                            <option key={g.name} value={g.name}>{g.name}</option>
                        ))}
                    </select>

                    <div className="inputsC">
                        {input.genres.map(g => (
                            <div key={g.name} className="selected">
                                <p>{g}</p>
                            <button className="delete-btn" onClick={() => handleDeleteGenre(g)}>Delete</button>
                        </div>
                        ))}
                        </div>

                        <div className="submit">
                            <button type="submit" className="submit-btn">
                                Create
                            </button>
                   </div>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}