import GenerosActionTypes from "./action-types";

const estadoInicial = {
    listaGeneros: []
}

const generosReducer = (state = estadoInicial, action) => {
    if(action.type === GenerosActionTypes.CarregarLista){
        return { ...state, listaGeneros: action.payload };
    }
    return state;
};

export default generosReducer;