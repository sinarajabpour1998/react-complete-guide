import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="container">
            <div className="row text-center item mb-2">
                <div className="col-md-3">
                    <p>{day} {month} {year}</p>
                </div>
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