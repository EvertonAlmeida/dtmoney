import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"

interface Transition {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<Transition[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[]);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('en-US').format(
                                    new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
