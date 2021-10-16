function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="col-md-3">
            <p>{day} {month} {year}</p>
        </div>
    );
}

export default ExpenseDate;