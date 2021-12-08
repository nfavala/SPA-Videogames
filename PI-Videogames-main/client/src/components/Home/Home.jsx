import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./Home.scss";
import GameCard from "../../components/GameCard/GameCard";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import {
  filterDbCreated,
  getGenres,
  getVideoGames,
  orderByName,
  orderByRating,
  filterByGenre,
  getPlatforms,
} from "../../actions/index";

export default function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.videoGames);
    // const videogameState = useSelector(state => state.allVideogames);

    const [currentPages, setCurrentPages] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);
    const [order, setOrder] = useState("");

    const indexLastGame = currentPages * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = allVideogames.slice(indexFirstGame, indexLastGame);

    const pagination = (pageNum) => {
        setCurrentPages(pageNum);
    };

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
      }, [dispatch]);
    
      useEffect(() => {
        dispatch(getVideoGames());
      }, [dispatch]);

       if (!allVideogames.length) {
    return <Loader />;
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideoGames());
  };

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPages(1);
    setOrder(e.target.value);
  }

  function handleRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPages(1);
    setOrder(e.target.value);
  }

  function handleCreated(e) {
    e.preventDefault();
    dispatch(filterDbCreated(e.target.value));
    setCurrentPages(1);
    setOrder(e.target.value);
  }

  function handleGenre(e) {
    e.preventDefault();
    dispatch(filterByGenre(e.target.value));
    setCurrentPages(1);
    setOrder(e.target.value);
  }


  return (
    <div>
      <div className="create-btn">
        <Link className="create-game" to="/creategame">
           Create videogame
        </Link>
      </div>
      <div className="reload-btn">
        <button className="reload" onClick={(e) => {handleClick(e)}}>
          Reload Games
        </button>
      </div>
      
    <div>
    <Navbar
          handleSort={handleSort}
          handleRating={handleRating}
          handleFilterCreated={handleCreated}
          handleFilterGenre={handleGenre}
        />
    </div>

    <ul className="game-grid">
        {currentGames?.map((g) => {

            return (
                <GameCard
                    id={g.id}
                    name={g.name}
                    image={g.image}
                    genres={g.genres}
                    key={g.id}
                    rating={g.rating}
                    platforms={g.platforms} />
            );
        })}
    </ul><div className="marginBottom">
            <Pagination
                gamesTotal={gamesPerPage}
                allVideogames={allVideogames.length}
                pagination={pagination} />
        </div>
      </div>
  )
};
