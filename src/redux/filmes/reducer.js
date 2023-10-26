import FilmesActionTypes from "./action-types";

const estadoInicial = {
    listaFilmes: [],
    filmesAlugados: [],
    alterarFilme: []
}

const filmeReducer = (state = estadoInicial, action) => {
    switch (action.type){
        case FilmesActionTypes.CarregarLista: 
            return { ...state, listaFilmes: action.payload };
        
        case FilmesActionTypes.AlugarFilme:
            return { ...state, filmesAlugados: [...state.filmesAlugados, action.payload] };

        case FilmesActionTypes.DevolverFilme:
            return { 
                ...state, 
                filmesAlugados: state.filmesAlugados.filter(filme => filme.id != action.payload)};

        case FilmesActionTypes.AlterarFilmeInicio:
            console.log(action.payload);
            return { ...state, alterarFilme: action.payload };
    
        case FilmesActionTypes.AlterarFilmeAlterado:
            return { ...state, alterarFilme: [] }

        default: return state;
    }
};

export default filmeReducer;