import ExpenseItem from "./ExpenseItem";
import {Table} from "react-bootstrap";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <td colSpan="6" className="text-center">Nothing to show !</td>;

    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                id={expense.id}
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />
        ));
    }

    return (
        <div className="mt-4">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {expensesContent}
                </tbody>
            </Table>
        </div>
    );
}

export default Expenses;