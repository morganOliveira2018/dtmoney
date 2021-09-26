import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    /* Dica: sempre legal deixar o front-end conectado com alguma API mesmo que fictícia
    , pois deixar os dados estáticos diverge muito de deixar nossa aplicação pre-conectada,
    com dados vindos de uma API. 
    - O MirageJS ajuda a deixar nosso front semi pronto enquanto não tem back-end;
    */
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de aplicativo</td>
                        <td className="deposit">R$ 12.00</td>
                        <td>Desenvolvimento pessoal</td>
                        <td>22/09/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$ 1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}