import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import CreditsReducer from "./reducer-credits";

const rootReducer = combineReducers({
    movies: MoviesReducer,
    credits: CreditsReducer
});

export default rootReducer;