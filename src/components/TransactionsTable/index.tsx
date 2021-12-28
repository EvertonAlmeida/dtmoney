import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"

export const TransactionsTable = () => {
	useEffect(() => {
		api.get('transactions')
		.then(response => console.log(response.data))
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
                    <tr>
                        <td>website development</td>
                        <td className="deposit">$12,000.00</td>
                        <td>development</td>
                        <td>02/02/2021</td>
                    </tr>
                    <tr>
                        <td>rent</td>
                        <td className="withdraw">- $1,000.00</td>
                        <td>House</td>
                        <td>08/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
