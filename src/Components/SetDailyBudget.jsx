import proptypes from "prop-types";
const SetDailyBudget = (props) => {
    const {dailyBudget, changeDailyBudgetValue} = props;

    const setBudget = (e) =>{
        e.preventDefault();
        console.log(e);
        changeDailyBudgetValue(parseInt(e.target[0].value));
        e.target[0].value = "";
    }
    
    const resetBudget = () => {
        changeDailyBudgetValue(0);
    }

    return (
        <form onSubmit={setBudget}> 
            <input type="number" name="dailyBudget" placeholder="Enter Daily Budget" id=""/>
            {!dailyBudget>0 ? <button type="submit">Set Daily Budget</button> : null}
            {dailyBudget > 0 ? <button>Reset Budget</button> : null}
        </form>
    )
}
// SetDailyBudget.propTypes = {
//     changeDailyBudget: proptypes.func.isRequired
// }

export default SetDailyBudget;