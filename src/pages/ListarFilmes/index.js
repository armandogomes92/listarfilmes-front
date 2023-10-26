import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Table } from "react-bootstrap";
import moment from 'moment';
import BotaoGeral from "../../components/Button";
import styles from "./ListarFilmes.module.css";
import { getFilmes, deleteFilme } from "../../service/Filmes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listarFilmes, alugarFilme, devolverFilme, alterarFilmeInicio} from "../../redux/filmes/actions";
import { Link } from "react-router-dom";

function ListarFilmes() {
    const { listaFilmes, filmesAlugados } = useSelector((rootReducer) => rootReducer.filmeReducer);
    const dispatch = useDispatch();
    const deletarFilme = (id) => {
        const ids = [id]
        deleteFilme(ids);
    }
    useEffect(() => {
        getApiFilmes(dispatch);
    },[]);
    
    const locarFilme = (payload) => {
        dispatch(alugarFilme(payload));
    };

    const devolucaoFilme = (payload) => {
        dispatch(devolverFilme(payload));
    };

    const alterFilmes = (payload) => {
        dispatch(alterarFilmeInicio(payload));
    }
    
    return (
        <>
        <Header/>
        
        <Table striped bordered hover className={styles.table}>
            <thead>
                <tr>
                <th>Nome</th>
                <th>Data de lançamento</th>
                <th>Ativo</th>
                <th>Genero</th>
                <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaFilmes.map((filme) => 
                        <tr key={filme.id}>
                            <td>{filme.nome}</td>
                            <td>{moment(filme.dataCriacao).format('DD/MM/YYYY')}</td>
                            <td>{filme.ativo ? "Ativo" : "Inativo"}</td>
                            <td>{filme.genero.nome}</td>
                            <td className={styles.tdButtons}>
                                <div onClick={() => alterFilmes(filme)}>
                                    <Link to='/cadastrarFilmes'><BotaoGeral tipo="alterar" texto="Alterar"></BotaoGeral></Link>
                                </div>
                                <div onClick={() => deletarFilme(filme.id)}><BotaoGeral tipo="excluir" texto="Excluir"></BotaoGeral></div>
                                {filme.ativo ? 
                                    <div onClick={() => filmesAlugados.find(f => f.id == filme.id) ? devolucaoFilme(filme.id) : locarFilme(filme)}>
                                        <BotaoGeral tipo="alugar" texto={filmesAlugados.find(f => f.id == filme.id)? "Devolver" : "Alugar"}></BotaoGeral>
                                     </div>:
                                    <div></div>
                                }
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        
        <Footer/>
        </>
    );
}
function getApiFilmes(dispatch) {
    const response = getFilmes().then(result => {
        return result.json();
    });
    ( async () => {
        const payload = await response.then(response => response);
        dispatch (listarFilmes(payload))
    })();
} 
export default ListarFilmes;
