import ExpenseItem from "./ExpenseItem";
import {Table} from "react-bootstrap";

function Expenses(props) {
    const items = props.items;
    return (
        <div className="mt-4">
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
                    {items.map((expense) => (
                        <ExpenseItem
                            id={expense.id}
                            key={expense.id}
                            title={expense.title}
                            date={expense.date}
                            amount={expense.amount} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Expenses;