import { SERVER_CFG } from "../appConfig";

class EmprestimoRequests {

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastraEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimos';//Rota configurada na api
        this.routeCadastraEmprestimo = '/novo/emprestimos';//Rota configurada na api
        this.routeAtualizaEmprestimo = '/atualiza/emprestimos';//Rota configurada na api
        this.routeRemoveEmprestimo = '/remove/emprestimos';//Rota configurada na api
    }

    /*
    *Função que busca a lista de emprestimos api
    */

    async listarEmprestimos() {
        try{
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);
            
            if(respostaAPI.ok) {
                const listaDeEmprestimos = await respostaAPI.json();
                return listaDeEmprestimos;
            }
        }catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }

}

export default new EmprestimoRequests();
