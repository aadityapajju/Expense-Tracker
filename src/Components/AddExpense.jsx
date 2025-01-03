import { useState } from "react";
const AddExpense = (props) => {
    const {setExpense, setTotalExpense} = props;
    const[amount, setAmount] = useState(null);

    const setCredit = () => {
        setExpense((prevExpense) => {
            return [...prevExpense, {
                amount: amount,
                type: "Credit"
            }]
        })
        setAmount("");
    }
    const setDebit = () => {
        setExpense((prevExpense) => {
            return [...prevExpense, {
                amount: amount,
                type: "Debit"
            }]
        })
        setTotalExpense((prevTotalExpense) => prevTotalExpense + parseInt(amount));
        setAmount("");
    }

    return (
        <>
        <div>
            <input value={amount} onChange={(e) => 
                setAmount(parseInt(e.target.value))
            } type="number" name="expense" placeholder="Enter Expense " id=""/>          
        </div>
        <div className="buttonContainer">
            <button onClick={setCredit}>Credit</button>
             <button onClick={setDebit}>Debit</button>
        </div>
        </>
    )
}
export default AddExpense;