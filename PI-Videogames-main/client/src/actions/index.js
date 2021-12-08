import axios from "axios";

export function getVideoGames() {
    return async function (dispatch) {
        var response = await axios.get("http://localhost:3001/videogames");
        dispatch({
        type: "GET_VIDEOGAMES",
        payload: response.data
    })  
  }
};

// export function getVideoGames() {
//     return function (dispatch){
//     axios.get("http://localhost:3001/videogames")
//         .then(response => {
//             dispatch({
//                 type: "GET_VIDEOGAMES",
//                 payload: response.data
//         })
//     })
//   }
// };


export function getVideogameName(name) {
    return async function (dispatch) {
        try{
            var response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            dispatch({
                type: "GET_VIDEOGAME_NAME",
                payload: response.data
            })
        } catch(e){
            alert("Game not found");
        }
    }
};

export function getGenres() {
    return async function (dispatch) {
        var info = await axios.get("http://localhost:3001/genre", {});
         dispatch({
            type: "GET_GENRES",
            payload: info.data
        })
    }
};

export function getPlatforms() {
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/platform");
        dispatch({ 
            type: "GET_PLATFORMS", 
            payload: info.data });
    };
};

export function getDetail(id) {
    if(id){
        return async function (dispatch) {
            try{
                const details = await axios.get(`http://localhost:3001/videogames/${id}`)
                dispatch ({ 
                    type: "GET_DETAIL",
                    payload: details.data
                })
            }catch(e){
                console.log(e)
            }
        }
    }
    return {
        type: "RESET",
    }
};

export function postVideoGame(payload) {
    return async function (dispatch) {
        const post = await axios.post("http://localhost:3001/videogames", payload);
        return post;
    }
}

export function filterDbCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload,
    }
};

export function filterByGenre(payload) {
    return {
        type: "FILTER_BY_GENRE",
        payload,
    }
};

export function orderByName(payload) {
    return{
        type: "ORDER_BY_NAME",
        payload,
    }
};

export function orderByRating(payload) {
    return {
        type: "ORDER_BY_RATING",
        payload,
    }
};
