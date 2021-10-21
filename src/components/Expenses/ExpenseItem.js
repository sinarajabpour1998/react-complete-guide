import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return (
        <tr>
            <td>
                <p>{props.id}</p>
            </td>
            <td>
                <p>{props.title}</p>
            </td>
            <td>
                <p>$ {props.amount}</p>
            </td>
            <td>
                <ExpenseDate date={props.date} />
            </td>
            <td>
                -
            </td>
        </tr>
    );
}

export default ExpenseItem;