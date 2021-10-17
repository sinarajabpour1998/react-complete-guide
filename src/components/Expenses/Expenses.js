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
                    <ExpenseItem
                        id={items[0].id}
                        title={items[0].title}
                        date={items[0].date}
                        amount={items[0].amount} />
                    <ExpenseItem
                        id={items[1].id}
                        title={items[1].title}
                        date={items[1].date}
                        amount={items[1].amount} />
                </tbody>
            </Table>
        </div>
    );
}

export default Expenses;