import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const expenseAction = () => {
        setTitle("Updated");
        console.log(title);
    }

    return (
        <tr>
            <td>
                <p>{props.id}</p>
            </td>
            <td>
                <p>{title}</p>
            </td>
            <td>
                <p>$ {props.amount}</p>
            </td>
            <td>
                <ExpenseDate date={props.date} />
            </td>
            <td>
                <button className="btn btn-warning" onClick={expenseAction}>
                    Edit title
                </button>
            </td>
        </tr>
    );
}

export default ExpenseItem;