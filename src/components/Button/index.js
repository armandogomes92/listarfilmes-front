import styles from './Button.module.css';

function BotaoGeral(props) {
    const estilo = props.tipo === "alterar" ? styles.alterar : 
                    props.tipo === "excluir" ? styles.excluir : styles.submit;
    return <button type="submit" className={estilo}>{props.texto}</button>;
}

export default BotaoGeral;