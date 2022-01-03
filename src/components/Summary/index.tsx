import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./style"

export const Summary = () => {
	const { transactions } = useContext(TransactionsContext);

	const summary = transactions.reduce((acc, transaction) => {
		if ( transaction.type === 'deposit') {
			acc.incomings += transaction.amount;
			acc.total += transaction.amount;
		}else {
			acc.outcomings += transaction.amount;
			acc.total -= transaction.amount;
		}

		return acc;
	}, {
		incomings: 0,
		outcomings: 0,
		total: 0,
	})

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong>{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(summary.incomings)}</strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong>-{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(summary.outcomings)}
				</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(summary.total)}</strong>
            </div>
        </Container>
    )
}
