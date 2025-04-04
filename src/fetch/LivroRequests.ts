import { SERVER_CFG } from "../appConfig";

class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastraLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/Livros';//Rota configurada na api
        this.routeCadastraLivro = '/novo/Livro';//Rota configurada na api
        this.routeAtualizaLivro = '/atualiza/Livro';//Rota configurada na api
        this.routeRemoveLivro = '/remove/Livro';//Rota configurada na api
    }

    /*
    *Função que busca a lista de Livros api
    */

    async listarLivros() {
        try{
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);
            
            if(respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
        }catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }

}

export default new LivroRequests();
