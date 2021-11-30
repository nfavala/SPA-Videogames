import loader from "../images/loader.gif";
import "./Loader.scss";

export default function Loader() {
    return(
    <div className="loader">
        <img src={loader} alt="loading"/>
        <p>Loading...</p>
    </div>
    )
};