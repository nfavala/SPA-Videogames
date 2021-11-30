const initialState = {
    videoGames: [],
    allVideoGames: [],
    genres: [],
    detail:[],
    platforms:[],
}

const reducer = (state = initialState, action) => {
switch(action.type) {
    
    case "RESET":
        return {
            ...state,
            detail:[],
        };

    case "GET_VIDEOGAMES": 
    return {
        ...state,
        videoGames: action.payload,
        allVideoGames: action.payload,
    };

    case "GET_VIDEOGAME_NAME": 
    return {
        ...state,
        videoGames: action.payload,
    }

    case "GET_GENRES":
    return {
        ...state,
        genres: action.payload,
    }

    case "GET_PLATFORMS":
    return {
        ...state,
        platforms: action.payload,
    }

    case "POST_VIDEOGAME":
        return {
            ...state,
        };

    case "GET_DETAIL":
        return{
            ...state,
            detail: action.payload,
        };

    case "ORDER_BY_NAME":
        let sortName = action.payload === "asc"?
        state.videoGames.sort(function (a, b) {
            if(a.name > b.name) {
                return 1;
            }
            if(b.name > a.name) {
                return -1;
            }
            return 0;
        })
        :state.videoGames.sort(function(a, b){
            if(a.name > b.name){
                return -1;
            }
            if(b.name > a.name){
                return 1;
            }
            return 0;
        });
     return {
         ...state,
         videoGames: sortName,
     };
    
     case "ORDER_BY_RATING":
     let sortRating = action.payload === "low" ?
     state.videoGames.sort(function (a, b) {
         if (a.rating > b.rating) {
             return 1;
         }
         if (b.rating > a.rating) {
             return -1;
         }
         return 0;
     })
     :state.videoGames.sort(function(a, b){
         if (a.rating > b.rating) {
             return -1;
         }
         if (b.rating > a.rating) {
             return 1;
         }
         return 0;
     });
     return {
         ...state,
         videoGames: sortRating,
     };

     case "FILTER_BY_GENRE":
     const allGames = state.videoGames;
     const filtered = action.payload === "all" ?
     state.allVideoGames
     : allGames.filter(g => {
         return g.genres.find(g => {
             return g.name === action.payload;
         })
     });
     return {
         ...state,
         videoGames: filtered,
     };

     case "FILTER_CREATED":
     const createdGame = action.payload === "created" ? 
     state.allVideoGames.filter(g => g.created)
     : state.allVideoGames.filter(g => !g.created);

     return{
         ...state,
         videoGames: action.payload === "all" ? state.allVideoGames : createdGame,
     };

     default:
    return state;
    }
};

export default reducer;