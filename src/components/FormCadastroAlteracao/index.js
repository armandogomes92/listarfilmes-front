import styles from "./Form.module.css";
import { getGeneros } from "../../service/Generos"
import { listarGeneros } from "../../redux/genero/actions"
import { listarFilmes, resetarAlterarFilme } from "../../redux/filmes/actions"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putFilme, getFilmes, postFilme } from "../../service/Filmes";
import { Link } from "react-router-dom";
import BotaoGeral from "../Button";
import { useState } from "react";


function Form() {
    const dispatch = useDispatch();
    const { listaGeneros } = useSelector((rootReducer) => rootReducer.generoReducer);
    const { alterarFilme } = useSelector((rootReducer) => rootReducer.filmeReducer);

    useEffect(() => {
        getApiGeneros(dispatch);
    },[]);

const [nome, setNome] = useState(alterarFilme.length === 0 ? '' :alterarFilme.nome );
const [generoFilme, setGenero] = useState(alterarFilme.length === 0 ? 1 : alterarFilme.genero.id);
const [ativo, setAtivo] = useState(alterarFilme.length === 0  ? true : alterarFilme.ativo);
const [data, setData] = useState(alterarFilme.length === 0 ? "" : alterarFilme.data);
const handlerChangeNome = (event) => {
    setNome(event.target.value);
}
const handlerChangeGenero = (event) => {
    setGenero(event.target.value);
}
const handlerChangeAtivo = (event) => {
    setAtivo(event.target.checked);
}
const handlerChangeData = (event) => {
    setData(event.target.value);
}

const criarObjetoFilme = () => {
     const filme = {
        nome: nome,
        dataCriacao: data,
        genero: listaGeneros.find(f => f.id == generoFilme),
        generoId: generoFilme,
        ativo: ativo
    }
    return filme;
}

const criarFilme = () => {
    const filmeCriado = criarObjetoFilme();
    postFilme(filmeCriado);
    getApiGeneros(dispatch);
    dispatch(resetarAlterarFilme);
}

const alterar = () => {
    const filmeAlterado = criarObjetoFilme()
    
    putFilme(alterarFilme.id, filmeAlterado);
    getApiGeneros(dispatch);
    dispatch(resetarAlterarFilme);
}
    return (
        <section className={styles.form}>
            <form>
                <div>
                    <label>Nome do filme</label>
                    <input type="text" maxLength={200} value={nome} onChange={handlerChangeNome}></input>
                </div>
                {
                    alterarFilme.length === 0 ? 
                        <div>
                            <label>Data de criação</label><br/>
                            <input type="date" value={data} onChange={handlerChangeData}/>
                        </div> : 
                        <div></div>
                }
                <div>
                    <label>Genero</label>
                    <select value={generoFilme} onChange={handlerChangeGenero}>
                        {
                            listaGeneros.map((genero) => 
                                <option value={genero.id}>{genero.nome}</option>
                            )

                        }
                    </select>
                </div>
                <div>
                    <label>Ativo</label>
                    <input checked={ativo} type="checkbox"onChange={handlerChangeAtivo}></input>
                </div>
            </form>
            <Link onClick={alterarFilme.length === 0 ? criarFilme : alterar} to="/"><BotaoGeral tipo="alugar" texto="Salvar"></BotaoGeral></Link>
        </section>
    );
}
function getApiGeneros(dispatch) {
    const response = getGeneros().then(result => {
        return result.json();
    });
    ( async () => {
        const payload = await response.then(response => response);
        dispatch (listarGeneros(payload))})();
} 
export default Form;