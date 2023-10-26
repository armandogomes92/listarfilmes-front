import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Cadastro.module.css"
import Form from "../../components/FormCadastroAlteracao";

function CadastrarFilmes() {
    
    return (
        <div className={styles.content}>
            <Header/>
            <Form></Form>
            <Footer/>
        </div>
    );
}

export default CadastrarFilmes;