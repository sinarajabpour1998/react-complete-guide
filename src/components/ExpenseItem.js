import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return (
        <div className="container">
            <div className="row text-center item mb-2">
                <ExpenseDate date={props.date} />
                <div className="col-md-6">
                    <p>{props.title}</p>
                </div>
                <div className="col-md-3">
                    <p>$ {props.amount}</p>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;