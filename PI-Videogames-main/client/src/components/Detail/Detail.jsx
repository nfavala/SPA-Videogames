import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index.js";
import Loader from "../Loader/Loader";
import imageDefault from "../images/image-default.jpg";
import line from "../images/yellow-line.png"
import "./Detail.scss";

export default function Detail() {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [id, dispatch]);

    var detail = useSelector(state => state.detail);

    function handleReset() {
        dispatch(getDetail());
    }


    return (
        <>
        <div className="home">
            <Link className="home-btn" to="/home" onClick={handleReset}>
                HOME
            </Link>
            <div className="detail-container">
                <div>
                    <img className="detail-image" src={detail.background_image|| imageDefault} alt={detail.name}/>
                    <div className="line">
                <img className="divisor-line" alt="line" src={line}/>
            </div>
                    <div className="details">
                        <p className="name">
                            <strong>Title:</strong>{" "}{detail.name}
                        </p>

                        <p>
                            <strong>Released date:</strong>{" "}{detail.released || detail.releaseDate}
                        </p>

                        <p>
                            <strong>Platforms:</strong>{" "}

                            {detail.id?.length > 7
                            ? detail.platforms?.map(p => p.name).join(" - ")
                            : detail.platforms?.map(p => p.platform.name).join(" - ")}
                        </p>

                        <p>
                            <strong>Genres:</strong>{" "}
                            {detail.genres?.map(g => g.name).join("-")}
                        </p>

                        <p>
                            <strong>Rating:</strong>{" "}
                            {detail.rating}
                        </p>

                        <p className="description">
                            <strong>Description:</strong>{" "}
                            {detail.description_raw || detail.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}