import GenerosActionTypes from "./action-types"

export const listarGeneros = (payload) => ({
    type: GenerosActionTypes.CarregarLista,
    payload
})