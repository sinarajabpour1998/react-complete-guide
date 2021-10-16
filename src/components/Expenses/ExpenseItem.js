import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

    return (
        <Card parentClasses={"container"} childClasses={"row text-center item mb-2"}>
            <ExpenseDate date={props.date} />
            <div className="col-md-6">
                <p>{props.title}</p>
            </div>
            <div className="col-md-3">
                <p>$ {props.amount}</p>
            </div>
        </Card>
    );
}

export default ExpenseItem;