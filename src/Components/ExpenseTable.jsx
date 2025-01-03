const ExpenseTable = (props) => {
    const {expense} = props;
    return (
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Transaction Type</th>
                    </tr>   
                </thead>    
                <tbody>
                    {expense.map((expense, index) => {
                        return <tr key={index}>
                            <td>{expense.amount}</td>
                            <td style={{color: expense.type ==="Credit"? "green":"red"}}>{expense.type}</td>
                        </tr>
                    })}
                </tbody>     
            </table>
    )
}
export default ExpenseTable;