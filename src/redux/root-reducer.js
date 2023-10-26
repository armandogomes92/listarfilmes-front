import { combineReducers } from "redux";
import filmeReducer from "./filmes/reducer";
import generoReducer from "./genero/reducer";


const rootReducer = combineReducers({filmeReducer, generoReducer});

export default rootReducer;