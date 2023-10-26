import FilmesActionTypes from "./action-types"

export const listarFilmes = (payload) => ({
    type: FilmesActionTypes.CarregarLista,
    payload
});

export const alugarFilme = (payload) => ({
    type: FilmesActionTypes.AlugarFilme,
    payload,
});

export const devolverFilme = (payload) => ({
    type: FilmesActionTypes.DevolverFilme,
    payload,
});

export const alterarFilmeInicio = (payload) => ({
    type: FilmesActionTypes.AlterarFilmeInicio,
    payload,
});

export const resetarAlterarFilme = () => ({
    type: FilmesActionTypes.AlterarFilmeAlterado,
})