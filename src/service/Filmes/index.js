const url = 'https://localhost:44305/filme/';

export async function getFilmes() {
    const response = await fetch(url);
    
    return await respostaJson(response);
}

export async function postFilme(data){
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });

    return await respostaJson(response);
}

export async function putFilme(id, data){
    const response = await fetch(url+id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });

    return await respostaJson(response);
}

export async function deleteFilme(ids){
    const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(ids),
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });

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