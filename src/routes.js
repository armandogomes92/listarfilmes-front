import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListarFilmes from "./pages/ListarFilmes";
import CadastrarFilmes from "./pages/CadastrarFilmes";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ListarFilmes />}></Route>
                <Route path="/cadastrarFilmes" element={ <CadastrarFilmes />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;