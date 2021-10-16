import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const expenseAction = () => {
        alert(props.id + " clicked")
    }

    return (
        <Card parentClasses={"container"} childClasses={"row text-center item mb-2"}>
            <ExpenseDate date={props.date} />
            <div className="col-md-3">
                <p>{props.title}</p>
            </div>
            <div className="col-md-3">
                <p>$ {props.amount}</p>
            </div>
            <div className="col-md-3">
                <button onClick={expenseAction}>
                    Edit title
                </button>
            </div>
        </Card>
    );
}

export default ExpenseItem;