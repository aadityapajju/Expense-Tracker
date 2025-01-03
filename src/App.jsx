import { useState, useEffect } from 'react'
import './index.css'
import SetDailyBudget from './Components/SetDailyBudget'
import ExpenseTable from './Components/ExpenseTable'
import AddExpense from './Components/AddExpense'


function App() {
  const [dailyBudget, setDailyBudget] = useState(0);
  const[expense, setExpense] = useState([]);
  const[totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    if(totalExpense > dailyBudget) {
      alert("You have exceeded your dailyBudget");
      setTotalExpense(0);
      setExpense([]);
      setDailyBudget(null);
    }
    console.log(expense);
  }, [expense], [totalExpense])
  return (
    <div>
    <h1>Expense Tracker</h1>
    {dailyBudget > 0 ? <p>Your dailyBudget is : {dailyBudget}</p> : <p>Set your dailyBudget</p>}
    {totalExpense > 0 ? <p style={{color:totalExpense/2 <dailyBudget ? 'green':'red'}}>Your total expense is : {totalExpense}</p> : null}
    <SetDailyBudget dailyBudget={dailyBudget} changeDailyBudgetValue={setDailyBudget}/>
    {
      dailyBudget > 0?
      <div>
      <ExpenseTable expense={expense}/>
      <AddExpense setExpense={setExpense} setTotalExpense={setTotalExpense}/> 
      </div>  : null
      }
    </div>
    )
}

export default App
