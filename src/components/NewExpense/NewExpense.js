import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const expenseDataHandler = (expenseData) => {
        console.log("New Expense parent");
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onNewExpenseDataSave(expense);
    }

    return (
        <div>
            <ExpenseForm onExpenseDataSave={expenseDataHandler} />
        </div>
    );
}

export default NewExpense;