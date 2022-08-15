import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Bancos de Dados Relacionais</td>
                        <td className="deposit">R$20.500</td>
                        <td>Desenvolvimento</td>
                        <td>15/08/2022</td>
                    </tr>
                    <tr>
                        <td>Internet</td>
                        <td className="withdraw">- R$125.00</td>
                        <td>Contas Gerais</td>
                        <td>20/08/2022</td>
                    </tr>
                    <tr>
                        <td>Investimentos</td>
                        <td className="withdraw">- R$40.00</td>
                        <td>Investimentos Pessoais</td>
                        <td>30/08/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}