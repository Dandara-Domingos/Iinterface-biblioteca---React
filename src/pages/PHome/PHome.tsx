import Cabecalho from "../../components/Cabecalho/Cabecalho";
import LoginForm from "../../components/LoginForm/LoginForm";
import Rodape from "../../components/Rodape/Rodape";
import TabelaAluno from "../../components/Tabelas/TabelaAluno/TabelaAluno";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";
import TabelaLivro from "../../components/Tabelas/TabelaLivro/TabelaLivro";

function PHome() {
    return (
        <>
        <Cabecalho/>
        <TabelaEmprestimo/>
        <Rodape/>
        </>
    );
}

export default PHome;