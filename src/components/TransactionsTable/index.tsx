import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    /* Dica: sempre legal deixar o front-end conectado com alguma API mesmo que fictícia
    , pois deixar os dados estáticos diverge muito de deixar nossa aplicação pre-conectada,
    com dados vindos de uma API. 
    - O MirageJS ajuda a deixar nosso front semi pronto enquanto não tem back-end;
    */
   const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
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
                    {transactions.map(transaction => {
                     return (
                         <tr key={transaction.id}>
                             <td>{transaction.title}</td>
                             <td className={transaction.type}>{transaction.amount}</td>
                             <td>{transaction.category}</td>
                             <td>{transaction.createdAt}</td>
                         </tr>
                     );   
                    })}
                </tbody>
            </table>
        </Container>
    );
}