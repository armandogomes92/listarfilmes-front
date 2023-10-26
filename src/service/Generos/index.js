const url = 'https://localhost:44305/genero/';

export async function getGeneros() {
    const response = await fetch(url);
    
    return await respostaJson(response);
}

async function respostaJson(resposta) {
    if(!resposta.ok) {
        throw new Error(
            `${resposta.status} - ${resposta.statusText}`
        );
    }
   return resposta
}