import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const expenseAction = () => {
        setTitle("Updated");
        console.log(title);
    }

    return (
        <Card parentClasses={"container"} childClasses={"row text-center item mb-2"}>
            <ExpenseDate date={props.date} />
            <div className="col-md-3">
                <p>{title}</p>
            </div>
            <div className="col-md-3">
                <p>$ {props.amount}</p>
            </div>
            <div className="col-md-3">
                <button className="btn btn-warning ex-btn" onClick={expenseAction}>
                    Edit title
                </button>
            </div>
        </Card>
    );
}

export default ExpenseItem;