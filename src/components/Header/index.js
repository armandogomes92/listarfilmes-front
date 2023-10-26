 import styles from "./Header.module.css"
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <h1>BlockBuster do seu Armando</h1>

            <nav>
                <Link to="/">Listar Filmes</Link>
                <Link to="/cadastrarFilmes">Cadastrar Filmes</Link>
                {/* <a href="#"><Link to="/alterarFilmes">Alterar Filmes</Link></a>
                <a href="#"><Link to="/apagarFilmes">Apagar Filmes</Link></a>
                <a href="#"><Link to="">Alugar Filmes</Link></a>
                <a href="#"><Link to="">Devolver Filmes</Link></a> */}
            </nav>
        </header>
    );
}

export default Header;