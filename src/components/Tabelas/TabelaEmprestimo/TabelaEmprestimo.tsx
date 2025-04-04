import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';

function TabelaEmprestimo() {
    const [Emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchEmprestimos = async () => {
        try{
            const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimos();
            setEmprestimos(listaDeEmprestimos);
        }catch (error) {
            console.error('Erro ao buscar Emprestimos: ', error);
        }
    };
    fetchEmprestimos();
}, [Emprestimos]);

    return (
        <>
            <DataTable value={Emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nome" header="Nome Aluno"  body={(rowData) => rowData.aluno.nome} style={{ width: '25%' }}>{Emprestimos}</Column>
                <Column field="titulo" header="Titulo do Livro"  body={(rowData) => rowData.livro.titulo} style={{ width: '25%' }}></Column>
                <Column field="dataEmprestimo" header="Data Emprestimo" style={{ width: '25%' }}></Column>
                <Column field="dataDevolucao" header="Data Devolução" style={{ width: '25%' }}></Column>
                <Column field="statusEmprestimo" header="Status Emprestimo" style={{ width: '25%' }}></Column>

            </DataTable>

        </>
    );
}

export default TabelaEmprestimo;