import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionType {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

// type TransactionType = Pick<Transaction, 'title | 'amount' | 'type' | 'category'>;

type TransactionType = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
    children: ReactNode; // ReactNode aceita qualquer tipo de conteúdo válido para o react
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionType) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionType) {
        api.post('/transactions', transaction)
        
        /* console.log ({
          title,
          value,
          category,
          type
        }) */
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}


